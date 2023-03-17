<?php

namespace App\Http\Controllers;
use App\Models\Firm;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class FirmMgrController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $firms = Firm::All();
    
        return Inertia::render('firmmgr/Index', ['firms' => $firms]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('firmmgr/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {       
         Validator::make($request->all(), [
                 'title' => ['required'],
                 'description' => ['required'],
              ])->validate();
        $addfirm =  new Firm;
        $addfirm->title = $request->title;
        $addfirm->sitepage = $request->sitepage; 
        $addfirm->purpose = $request->purpose;
        $addfirm->description = $request->description;
        $addfirm->hashid = sha1($request->title);
        $addfirm->save();
        return Redirect::route('firmmgr.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Firm $firm)
    {
        return Inertia::render('firmmgr/Edit', [
            'firm' => [
                'id' => $firm->id,
                'title' => $firm->title,
                'description' => $firm->description,
                'purpose'=> $firm->purpose,
                'sitepage' => $firm->sitepage
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        Validator::make($request->all(), [
            'title' => ['required'],
            'description' => ['required'],
        ])->validate();
        $addfirm = Firm::find($request->firmid); 
        $addfirm->title = $request->title;
        $addfirm->sitepage = $request->sitepage; 
        $addfirm->purpose = $request->purpose;
        $addfirm->description = $request->description;
        $addfirm->save();
        
        return Redirect::route('firmmgr.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Firm $firm)
    {
        $firm->delete();

        return Redirect::route('firmmgr.index');
    }

}
