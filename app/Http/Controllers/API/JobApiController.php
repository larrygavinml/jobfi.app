<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller; 
use App\Models\Job;
use App\Models\User_Job;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class JobApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Inertia::render('Joblist', [
                'jobs' => new JobCollection(
                Job::orderBytitle()
                    ->paginate()
                    ->appends(Request::all())
            ),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function show($hashid)
    {
        //
        $job = Job::where('hashid',$hashid)->get();
        return Inertia::render('job/Index', [
            'job' => $job,
        ]);
    }

      /**
     * Display the specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function apply($hashid)
    {
        //
        $job = Job::where('hashid',$hashid)->get();
        return Inertia::render('job/apply', [
            'job' => $job,
        ]);
    }
      /**
     * Display the specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function jobapply(Request $request)
    {   
      
        if($request->hasFile('cv')){
            $photo = $request->file('cv');
            $filename = $request->userid. '.' . $photo->getClientOriginalExtension();

            $this->deleteOldcv($request->userid);

            Storage::putFileAs('public/usercv', $photo, $filename );
            $user = User::where('id','=',$request->userid)->first();
            $user->update([
                'cv_name' => $filename
            ]); 
            $userjob =  new User_Job;
            $userjob->user_id = $request->userid;
            $userjob->job_id = $request->jobid; 
            $userjob->save();       
            return response() -> json(['status' => 300]);
        }
    }
   
      /**
     * Display the specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function jobpost(Request $request)
    {       
            $user = User::where('id','=',$request->userid)->first(); 
            $firmid = $user->firm_id;
            $newjob = new Job;
            $newjob->title = $request->title;
            $newjob->jobtype = $request->jobtype; 
            $newjob->worklocation = $request->worklocation;
            $newjob->worktype = $request->worktype;
            $newjob->description = $request->description;
            $newjob->salaryrange = $request->salaryrange;
            $newjob->salarytype = $request->salarytype;
            $newjob->firm_id = $firmid;
            $newjob->save();
            $userjob = new User_Job;
            $userjob->user_id = $user->id;
            $userjob->job_id = $newjob->id; 
            $userjob->save(); 
            
            return response() -> json(['status' => 300]);
    }
   
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function jobupdate($id, Request $request)
    {   
        $user = User::where('id',$request->userid)->first();
        Validator::make($request->all(), [
            'title' => ['required'],
            'description' => ['required'],
        ])->validate();
    
        $editjob = Job::find($id);
        $editjob->title = $request->title;
        $editjob->jobtype = $request->jobtype; 
        $editjob->worklocation = $request->worklocation;
        $editjob->worktype = $request->worktype;
        $editjob->description = $request->description;
        $editjob->salaryrange = $request->salaryrange;
        $editjob->salarytype = $request->salarytype;
        $editjob->save();
        return response() -> json(['status' => 300]);
    }
     /**
     * Display the specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function quicker(Request $request)
    {   
            
        $user = User::where('id',$request->userid)->first();
        if($user->initbalance > 200)
        {
            $user->initbalance -=200;
            $user->save(); 
            $userjob = User_Job::where('user_id',$user->id)->where('job_id',$request->jobid)->first();
            $userjob->quicker +=1;
            $userjob->save(); 
            return response() -> json(['status' => 300]);
        }
        elseif($user->unlockedcoin > 200)
        {
            $user->unlockedcoin -=(200 - $user->initbalance);
            $user->initbalance==0; 
            $user->save(); 
            $userjob = User_Job::where('user_id',$user->id)->where('job_id',$request->jobid)->first();
            $userjob->quicker +=1;
            $userjob->save(); 
            return response() -> json(['status' => 400]);
        }
        else{
            return response() -> json(['status' => 500]); 
        }
       
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function edit(Job $job)
    {
        //
    }
    protected function deleteOldcv($userid)
    {   $user = User::where('id','=',$userid)->first(); 
        if($user->cv_name)  {
          Storage::delete('public/usercv/'.$user->cv_name );
        }
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Job $job)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function destroy(Job $job)
    {
        //
    }
}
