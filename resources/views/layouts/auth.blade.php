<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
    @section('styles')
    <link href="{{ asset('css/all-login.css') }}" rel="stylesheet">
    @show
</head>
<body data-open="click" data-menu="vertical-menu" data-col="1-column" class="vertical-layout vertical-menu 1-column  blank-page blank-page">
    <div id="app-content content container-fluid">
        <div class="content-wrapper">
            @yield('content')
        </div>
    </div>
    @section('scripts')
    <script src="{{('js/all.js')}}" type="text/javascript"></script>
    @show
</body>
</html>
