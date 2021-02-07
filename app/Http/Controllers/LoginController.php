<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{

    public function authenticate(Request $request)
    {

        // Retrive Input
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {


            $request->session()->regenerate();

            $user = Auth::user();

            return redirect()->intended('user');
        }
        // if failed login
        return back()->withErrors([
            'email' => 'credenciales no validas',
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
