<?php

namespace App\Http\Controllers;
use App\Http\Resources\JobCollection;
use App\Models\Job;
use App\Models\User_Job;
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
        $job = Job::where('hashid',$hashid)->first();
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
    public function destroy(Job $job)
    {
        //
    }
}
