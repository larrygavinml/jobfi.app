<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Route;
use App\Models\{Job,Firm};
use Inertia\Inertia;
use Illuminate\Support\Collection;

class HomeController extends Controller
{
  public function index()
  {
    $firmids = Job::select('firm_id')->distinct()->get()->pluck('firm_id');
    $firms = Firm::whereIn('id',$firmids)->with('jobs', function ($query) {
      $query->take(4);
  })->paginate();
    return Inertia::render('Welcome', [
      'jobs' => Job::latest()->paginate(),
      'firms' => $firms,
      'canLogin' => Route::has('login'),
      'canRegister' => Route::has('register')
    ]);
  }

}