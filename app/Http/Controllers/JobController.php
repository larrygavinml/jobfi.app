<?php

namespace App\Http\Controllers;
use App\Http\Resources\JobCollection;
use App\Models\Job;
use App\Models\User_Job;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $jobs = Job::orderBy('id', 'DESC')->paginate();
        return Inertia::render('Joblist', [
                'jobs' => $jobs,
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
    public function userjobs($userid)
    {
        //
        $jobs = Auth::user()->jobs;
        if($jobs->count() > 0)
        {
        return Inertia::render('userjob/Index', [
            'jobs' => $jobs,
        ]);
        }
        else{
            return Inertia::render('userjob/Index', [
                'jobs' => "nojobs",
            ]); 
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function firmjobs($userid)
    {
        //
        $jobs = Auth::user()->jobs;
        if($jobs->count() > 0)
        {
        return Inertia::render('firmjob/Index', [
            'jobs' => $jobs,
        ]);
        }
        else{
            return Inertia::render('firmjob/Index', [
                'jobs' => "nojobs",
            ]); 
        }

    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function postjob()
    {
        $jobs = Auth::user()->jobs; 
        return Inertia::render('firmjob/post', [
            'jobs' => $jobs,
        ]);
       

    }

       /**
     * Display the job edit page specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function jobedit(Job $job)
    {
        //
        return Inertia::render('firmjob/Edit', [
            'job' => $job
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
        $job = Job::where('hashid',$hashid)->first();
        $userjobid = User_Job::where('job_id',$job->id)->pluck('user_id');
        $loginuser=auth()->user(); 
        if($loginuser::whereIn('id', $userjobid )->exists())
        {
            return Inertia::render('job/apply', [
                'job' => $job,
                'userjob' => "true"
            ]);
        } 
        else{
            return Inertia::render('job/apply', [
                'job' => $job,
                'userjob' => "no"
            ]);
        }
       
    }
      /**
     * Display the specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function userapply(Request $request)
    {
        if($request->hasFile('cv')){
            $photo = $request->file('cv');
            $filename = $request->userid. '.' . $photo->getClientOriginalExtension();

            $this->deleteOldImage();

            Storage::putFileAs('public/usercv', $photo, $filename );
            auth()->user()->update([
                'cv_name' => $filename
            ]); 
            $userjob =  new User_Job;
            $userjob->user_id = $request->userid;
            $userjob->job_id = $request->jobid; 
            $userjob->save();       
            return response() -> json(['status' => 200, 'user' => $user]);
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
    protected function deleteOldcv()
    {
        if(auth()->user()->cv_name)  {
          Storage::delete('public/usercv/'.auth()->user()->cv_name );
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
    public function jobDelete($id)
    {
        //
        Job::find($id)->delete();
        return back()->with('flash', [
            'message' => 'success',
        ]);
    }
}
