<link rel="icon" type="image/png" href="{{ asset('Favicon.png') }}" />

<meta name="theme-color" content="rgb(25 75 125 / 0.9)">
<meta name="author" content="figuil.com" />

<meta property="og:locale" content="{{ str_replace('_', '-', app()->getLocale()) }}" />
<meta property="og:title" content="{{ "IAIPM Parrainage" }} | {{ config('app.name') }}">

<meta property="og:url" content="{{ config('app.url') }}">
<meta property="og:site_name" content="{{ config('app.name') }}">

@hasSection('og-content')
    @yield('og-content')
@else
    <meta property="og:type" content="website">
    <meta name="description"
        content="Programme de parrainage de IAIPM" />

    <meta property="og:description"
        content="Programme de parrainage de IAIPM">

    <meta property="og:image" content="{{ asset('IAIPM/IAIPM.png') }}">
    <meta name="twitter:image" content="{{ asset('IAIPM/IAIPM.png') }}">
@endif

<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

<meta name="twitter:card" content="summary_large_image   ">
<meta property="og:updated_time" content="{{ now() }}" />
