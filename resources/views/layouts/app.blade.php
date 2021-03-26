<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'MS') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <link type="text/css" href="{{ asset('css/argon.css?v=1.0.0')}}" rel="stylesheet">
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
        <link rel="stylesheet" type="text/css" href="{{asset('css/bootstrap.min.css')}}"/>

        <link href="{{ asset('vendor/nucleo/css/nucleo.css')}}" rel="stylesheet">
        <link href="{{ asset('vendor/@fortawesome/fontawesome-free/css/all.min.css')}}" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="{{asset('DataTables/datatables.min.css')}}"/>

        <!-- Scripts -->
        <script src="{{ mix('js/app.js') }}" defer></script>
         <script src="{{ asset('js/jquery.1.12.4.min.js') }}"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        <script src="{{ asset('vendor/bootstrap/js/bootstrap.min.js') }}"></script>
        <script src="{{ asset('DataTables/datatables.min.js') }}"></script>
        <script src="{{ asset('vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js') }}"></script>
        <script src="{{ asset('vendor/bootstrap-datepicker/locales/bootstrap-datepicker.es.min.js') }}"></script>


    </head>
    <body class="font-sans antialiased">

    @include('layouts.menu')
    @include('layouts.menuPerfil')

    <div class="container-fluid">
                @yield('content')
            </div>
    </body>
</html>
