





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-FG+rXqMOivrAjdEQE7tO4BwM1poGmg70hJFTlNSxjX87grtrZ6UnPR8NkzwUHlQEGviu9XuRYeO8zH9YwvZhdg==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-146fab5ea30e8afac08dd11013bb4ee0.css" />
  
    <link crossorigin="anonymous" media="all" integrity="sha512-xhEwXUnAQrwtzx3SUeDRw7/d7lQmtwNKXic7VeJinUexaePJ2knNKoM3SJzmSmDq/Stn081QrAsZJ8UU98Rw0w==" rel="stylesheet" href="https://github.githubassets.com/assets/github-c611305d49c042bc2dcf1dd251e0d1c3.css" />
    
    
    
    


  <meta name="viewport" content="width=device-width">
  
  <title>incubator-echarts/world.js at 4.6.0 · apache/incubator-echarts</title>
    <meta name="description" content="A powerful, interactive charting and visualization library for browser - apache/incubator-echarts">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://avatars3.githubusercontent.com/u/47359?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="apache/incubator-echarts" /><meta name="twitter:description" content="A powerful, interactive charting and visualization library for browser - apache/incubator-echarts" />
    <meta property="og:image" content="https://avatars3.githubusercontent.com/u/47359?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="apache/incubator-echarts" /><meta property="og:url" content="https://github.com/apache/incubator-echarts" /><meta property="og:description" content="A powerful, interactive charting and visualization library for browser - apache/incubator-echarts" />

  <link rel="assets" href="https://github.githubassets.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6NTMwNTU4NTA1OjhjMjQwMjRmYWRmNzQ2MWI5YzUwM2VmNmEzYzQ1ODFlNTJmMDZmZmUyZDE3MGNlNTdkOWZjODE1NGVmOGZmNmY=--baa0d9474ed50164428725803501d51f7ba815dc">
  <link rel="sudo-modal" href="/sessions/sudo_modal">

  <meta name="request-id" content="5FAC:7CBF:121BE29:18BEE59:5EB2B167" data-pjax-transient="true" /><meta name="html-safe-nonce" content="ba5073431b5ab4ce493d33e97c8223ec3714a58b" data-pjax-transient="true" /><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvaW5jdWJhdG9yLWVjaGFydHMvdHJlZS80LjYuMC9tYXAvanMiLCJyZXF1ZXN0X2lkIjoiNUZBQzo3Q0JGOjEyMUJFMjk6MThCRUU1OTo1RUIyQjE2NyIsInZpc2l0b3JfaWQiOiI3OTgzMzMzOTU1NTEwNzkwNzc0IiwicmVnaW9uX2VkZ2UiOiJhcC1zb3V0aGVhc3QtMSIsInJlZ2lvbl9yZW5kZXIiOiJpYWQifQ==" data-pjax-transient="true" /><meta name="visitor-hmac" content="b3e98f732184d08c240646029488bad83160ccad98326836bd579bcb9b5d2d53" data-pjax-transient="true" />



  <meta name="github-keyboard-shortcuts" content="repository,source-code" data-pjax-transient="true" />

  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-ga_id" content="" class="js-octo-ga-id" /><meta name="octolytics-actor-id" content="33627426" /><meta name="octolytics-actor-login" content="Jaden-Yu" /><meta name="octolytics-actor-hash" content="a60d1eb7a188647cbddb7cfe2f4d06458040a9fdf09f14aec2b4f7c1e94dc3c3" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />


<meta name="optimizely-sdk-key" content="cowimJNste4j7QnBNCjaw" />

    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="fe17ffc2aa13d411cd8d6b0c79f17382">

<meta class="js-ga-set" name="dimension1" content="Logged In">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="Jaden-Yu">

      <meta name="expected-hostname" content="github.com">

      <meta name="js-proxy-site-detection-payload" content="MGZkZTFlMDMwYmVjOTVlYTVjODk0YTBmY2VjNmQ1NjA3NWYwZjY0MGIzMzY4Y2I5OWU4ZTk5Mjg2MjAxNDk4N3x7InJlbW90ZV9hZGRyZXNzIjoiNTkuNDEuMTYzLjM3IiwicmVxdWVzdF9pZCI6IjVGQUM6N0NCRjoxMjFCRTI5OjE4QkVFNTk6NUVCMkIxNjciLCJ0aW1lc3RhbXAiOjE1ODg3NjkxNDMsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS,MARKETPLACE_PENDING_INSTALLATIONS,GHE_CLOUD_TRIAL,PAGE_STALE_CHECK">

  <meta http-equiv="x-pjax-version" content="2944b64cc3068c20eaa8cad1522933a7">
  

      <link href="https://github.com/apache/incubator-echarts/commits/4.6.0.atom" rel="alternate" title="Recent Commits to incubator-echarts:4.6.0" type="application/atom+xml">

  <meta name="go-import" content="github.com/apache/incubator-echarts git https://github.com/apache/incubator-echarts.git">

  <meta name="octolytics-dimension-user_id" content="47359" /><meta name="octolytics-dimension-user_login" content="apache" /><meta name="octolytics-dimension-repository_id" content="9185792" /><meta name="octolytics-dimension-repository_nwo" content="apache/incubator-echarts" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="9185792" /><meta name="octolytics-dimension-repository_network_root_nwo" content="apache/incubator-echarts" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/apache/incubator-echarts/blob/4.6.0/map/js/world.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png">
  <link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg">

<meta name="theme-color" content="#1e2327">


  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-responsive page-blob">
    

    <div class="position-relative js-header-wrapper ">
      <a href="#start-of-content" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
      <span class="Progress progress-pjax-loader position-fixed width-full js-pjax-loader-bar">
        <span class="progress-pjax-loader-bar top-0 left-0" style="width: 0%;"></span>
      </span>

      
      



          <header class="Header py-lg-0 js-details-container Details flex-wrap flex-lg-nowrap p-responsive" role="banner">
  <div class="Header-item d-none d-lg-flex">
    <a class="Header-link" href="https://github.com/" data-hotkey="g d"
  aria-label="Homepage " data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>

  </div>

  <div class="Header-item d-lg-none">
    <button class="Header-link btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
      <svg height="24" class="octicon octicon-three-bars" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
    </button>
  </div>

  <div class="Header-item Header-item--full flex-column flex-lg-row width-full flex-order-2 flex-lg-order-none mr-0 mr-lg-3 mt-3 mt-lg-0 Details-content--hidden">
      <div class="header-search flex-self-stretch flex-lg-self-auto mr-0 mr-lg-3 mb-3 mb-lg-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="9185792" data-scoped-search-url="/apache/incubator-echarts/search" data-unscoped-search-url="/search" action="/apache/incubator-echarts/search" accept-charset="UTF-8" method="get">
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations"
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" value="5Si8DZX4fPDxTk2T5O3R2mfqdu7f6gar+UMVSei5DsvzaFlhPNutzycvZGeLTx17gWO7qolTPoYpzZxc5h0Few==" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" />
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
    </li>
</ul>

            </div>
      </label>
</form>  </div>
</div>


    <nav class="d-flex flex-column flex-lg-row flex-self-stretch flex-lg-self-auto" aria-label="Global">
    <a class="Header-link py-lg-3 d-block d-lg-none py-2 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:dashboard:user" aria-label="Dashboard" href="/dashboard">
      Dashboard
</a>
  <a class="js-selected-navigation-item Header-link py-lg-3  mr-0 mr-lg-3 py-2 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
    Pull requests
</a>
  <a class="js-selected-navigation-item Header-link py-lg-3  mr-0 mr-lg-3 py-2 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
    Issues
</a>

    <div class="mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15">
      <a class="js-selected-navigation-item Header-link py-lg-3 d-inline-block" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
        Marketplace
</a>      

    </div>

  <a class="js-selected-navigation-item Header-link py-lg-3  mr-0 mr-lg-3 py-2 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
    Explore
</a>


    <a class="Header-link d-block d-lg-none mr-0 mr-lg-3 py-2 py-lg-3 border-top border-lg-top-0 border-white-fade-15" href="https://github.com/Jaden-Yu">
      <img class="avatar avatar-user" height="20" width="20" alt="@Jaden-Yu" src="https://avatars3.githubusercontent.com/u/33627426?s=60&amp;u=5c4c571b33af636b9c6d25eaedabfc7ec446bdad&amp;v=4" />
      Jaden-Yu
</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/logout" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="doEqUUDJA5FWdb0Q6mZ31FcKa6+ZvGJ17S65xWGvmf8kdH2LJlDFNocWNxE+OpOT/JdjktfPIiM6O79N+yze2w==" />
      <button type="submit" class="Header-link mr-0 mr-lg-3 py-2 py-lg-3 border-top border-lg-top-0 border-white-fade-15 d-lg-none btn-link d-block width-full text-left" data-ga-click="Header, sign out, icon:logout" style="padding-left: 2px;">
        <svg class="octicon octicon-sign-out v-align-middle" viewBox="0 0 16 17" version="1.1" width="16" height="17" aria-hidden="true"><path fill-rule="evenodd" d="M12 9V7H8V5h4V3l4 3-4 3zm-2 3H6V3L2 1h8v3h1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v11.38c0 .39.22.73.55.91L6 16.01V13h4c.55 0 1-.45 1-1V8h-1v4z"></path></svg>
        Sign out
      </button>
</form></nav>

  </div>

  <div class="Header-item Header-item--full flex-justify-center d-lg-none position-relative">
    <div class="css-truncate css-truncate-target width-fit position-absolute left-0 right-0 text-center">
                <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
    <a class="Header-link" href="/apache">apache</a>
    /
    <a class="Header-link" href="/apache/incubator-echarts">incubator-echarts</a>

</div>
  </div>

  <div class="Header-item mr-0 mr-lg-3 flex-order-1 flex-lg-order-none">
    
    <a aria-label="You have no unread notifications" class="Header-link notification-indicator position-relative tooltipped tooltipped-sw js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:read" data-channel="notification-changed:33627426" href="/notifications">
        <span class="js-indicator-modifier mail-status "></span>
        <svg class="octicon octicon-bell" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
</a>
  </div>


  <div class="Header-item position-relative d-none d-lg-flex">
    <details class="details-overlay details-reset">
  <summary class="Header-link"
      aria-label="Create new…"
      data-ga-click="Header, create new, icon:add">
    <svg class="octicon octicon-plus" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg> <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-n2">
    
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>


  <div role="none" class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="apache/incubator-echarts">This repository</span>
  </div>
    <a role="menuitem" class="dropdown-item" href="/apache/incubator-echarts/issues/new/choose" data-ga-click="Header, create new issue" data-skip-pjax>
      New issue
    </a>


  </details-menu>
</details>

  </div>

  <div class="Header-item position-relative mr-0 d-none d-lg-flex">
    
  <details class="details-overlay details-reset js-feature-preview-indicator-container" data-feature-preview-indicator-src="/users/Jaden-Yu/feature_preview/indicator_check">

  <summary class="Header-link"
    aria-label="View profile and more"
    data-ga-click="Header, show menu, icon:avatar">
    <img
  alt="@Jaden-Yu"
  width="20"
  height="20"
  src="https://avatars3.githubusercontent.com/u/33627426?s=60&amp;u=5c4c571b33af636b9c6d25eaedabfc7ec446bdad&amp;v=4"
  class="avatar avatar-user " />

      <span class="feature-preview-indicator js-feature-preview-indicator" style="top: 10px;" hidden></span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-n2" style="width: 180px">
    <div class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/Jaden-Yu" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">Jaden-Yu</strong></a></div>
    <div role="none" class="dropdown-divider"></div>

      <div class="pl-3 pr-3 f6 user-status-container js-user-status-context pb-1" data-url="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1">
        
<div class="js-user-status-container
    user-status-compact rounded-1 px-2 py-1 mt-2
    border
  " data-team-hovercards-enabled>
  <details class="js-user-status-details details-reset details-overlay details-overlay-dark">
    <summary class="btn-link btn-block link-gray no-underline js-toggle-user-status-edit toggle-user-status-edit "
      role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:47359,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:33627426,&quot;originating_url&quot;:&quot;https://github.com/apache/incubator-echarts/blob/4.6.0/map/js/world.js&quot;}}" data-hydro-click-hmac="8c34d66e98eb68454066365961ec90ecfc6f4339db4a8589954138c93618e924">
      <div class="d-flex">
        <div class="f6 lh-condensed user-status-header
          d-inline-block v-align-middle
            user-status-emoji-only-header circle
            pr-2
"
            style="max-width: 29px"
          >
          <div class="user-status-emoji-container flex-shrink-0 mr-1 mt-1 lh-condensed-ultra v-align-bottom" style="">
            <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"></path></svg>
          </div>
        </div>
        <div class="
          d-inline-block v-align-middle
          
          
           css-truncate css-truncate-target 
           user-status-message-wrapper f6"
           style="line-height: 20px;" >
          <div class="d-inline-block text-gray-dark v-align-text-top text-left">
              <span class="text-gray ml-2">Set status</span>
          </div>
        </div>
      </div>
    </summary>
    <details-dialog class="details-dialog rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative flex-auto js-user-status-form" action="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="GvAzgi412cq0369p9Jr4LBqrM/0es4/OVo0a+oEdQVUF1y7qRwbJ9wiwRlbhvuiIweGRX5p/HF6hIAuuvqLyxA==" />
        <div class="Box-header bg-gray border-bottom p-3">
          <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog>
            <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
          </button>
          <h3 class="Box-title f5 text-bold text-gray-dark">Edit status</h3>
        </div>
        <input type="hidden" name="emoji" class="js-user-status-emoji-field" value="">
        <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
        <div class="px-3 py-2 text-gray-dark">
          <div class="js-characters-remaining-container position-relative mt-2">
            <div class="input-group d-table form-group my-0 js-user-status-form-group">
              <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
                <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker btn-open-emoji-picker p-0">
                  <span class="js-user-status-original-emoji" hidden></span>
                  <span class="js-user-status-custom-emoji"></span>
                  <span class="js-user-status-no-emoji-icon" >
                    <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"></path></svg>
                  </span>
                </button>
              </span>
              <text-expander keys=": @" data-mention-url="/autocomplete/user-suggestions" data-emoji-url="/autocomplete/emoji">
                <input
                  type="text"
                  autocomplete="off"
                  data-no-org-url="/autocomplete/user-suggestions"
                  data-org-url="/suggestions?mention_suggester=1"
                  data-maxlength="80"
                  class="d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field"
                  placeholder="What's happening?"
                  name="message"
                  value=""
                  aria-label="What is your current status?">
              </text-expander>
              <div class="error">Could not update your status, please try again.</div>
            </div>
            <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden>
              80 remaining
            </div>
          </div>
          <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
          <div class="overflow-auto ml-n3 mr-n3 px-3 border-bottom" style="max-height: 33vh">
            <div class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden">
              <h4 class="f6 text-normal my-3">Suggestions:</h4>
              <div class="mx-3 mt-2 clearfix">
                  <div class="float-left col-6">
                      <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png">🌴</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          On vacation
                        </div>
                      </button>
                      <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png">🤒</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Out sick
                        </div>
                      </button>
                  </div>
                  <div class="float-left col-6">
                      <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png">🏠</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Working from home
                        </div>
                      </button>
                      <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Focusing
                        </div>
                      </button>
                  </div>
              </div>
            </div>
            <div class="user-status-limited-availability-container">
              <div class="form-checkbox my-0">
                <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-true-compact-true" id="limited-availability-truncate-true-compact-true">
                <label class="d-block f5 text-gray-dark mb-1" for="limited-availability-truncate-true-compact-true">
                  Busy
                </label>
                <p class="note" id="limited-availability-help-text-truncate-true-compact-true">
                  When others mention you, assign you, or request your review,
                  GitHub will let them know that you have limited availability.
                </p>
              </div>
            </div>
          </div>
          <div class="d-inline-block f5 mr-2 pt-3 pb-2" >
  <div class="d-inline-block mr-1">
    Clear status
  </div>

  <details class="js-user-status-expire-drop-down f6 dropdown details-reset details-overlay d-inline-block mr-2">
    <summary class="f5 btn-link link-gray-dark border px-2 py-1 rounded-1" aria-haspopup="true">
      <div class="js-user-status-expiration-interval-selected d-inline-block v-align-baseline">
        Never
      </div>
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se pl-0 overflow-auto" style="width: 220px; max-height: 15.5em">
      <li>
        <button type="button" class="btn-link dropdown-item js-user-status-expire-button ws-normal" title="Never">
          <span class="d-inline-block text-bold mb-1">Never</span>
          <div class="f6 lh-condensed">Keep this status until you clear your status or edit your status.</div>
        </button>
      </li>
      <li class="dropdown-divider" role="none"></li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 30 minutes" value="2020-05-06T21:15:43+08:00">
            in 30 minutes
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 1 hour" value="2020-05-06T21:45:43+08:00">
            in 1 hour
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 4 hours" value="2020-05-07T00:45:43+08:00">
            in 4 hours
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="today" value="2020-05-06T23:59:59+08:00">
            today
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="this week" value="2020-05-10T23:59:59+08:00">
            this week
          </button>
        </li>
    </ul>
  </details>
  <input class="js-user-status-expiration-date-input" type="hidden" name="expires_at" value="">
</div>

          <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
        </div>
        <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
          <button type="submit" disabled class="width-full btn btn-primary mr-2 js-user-status-submit">
            Set status
          </button>
          <button type="button" disabled class="width-full js-clear-user-status-button btn ml-2 ">
            Clear status
          </button>
        </div>
</form>    </details-dialog>
  </details>
</div>

      </div>
      <div role="none" class="dropdown-divider"></div>

    <a role="menuitem" class="dropdown-item" href="/Jaden-Yu" data-ga-click="Header, go to profile, text:your profile">Your profile</a>

    <a role="menuitem" class="dropdown-item" href="/Jaden-Yu?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories">Your repositories</a>

    <a role="menuitem" class="dropdown-item" href="/Jaden-Yu?tab=projects" data-ga-click="Header, go to projects, text:your projects">Your projects</a>

    <a role="menuitem" class="dropdown-item" href="/Jaden-Yu?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">Your stars</a>
      <a role="menuitem" class="dropdown-item" href="https://gist.github.com/mine" data-ga-click="Header, your gists, text:your gists">Your gists</a>





    <div role="none" class="dropdown-divider"></div>
      
<div id="feature-enrollment-toggle" class="hide-sm hide-md feature-preview-details position-relative">
  <button
    type="button"
    class="dropdown-item btn-link"
    role="menuitem"
    data-feature-preview-trigger-url="/users/Jaden-Yu/feature_previews"
    data-feature-preview-close-details="{&quot;event_type&quot;:&quot;feature_preview.clicks.close_modal&quot;,&quot;payload&quot;:{&quot;originating_url&quot;:&quot;https://github.com/apache/incubator-echarts/blob/4.6.0/map/js/world.js&quot;,&quot;user_id&quot;:33627426}}"
    data-feature-preview-close-hmac="aa6bafdf6859a34630cab5d90b79c13f44c0ab585c1880ffc16a528fb0dbcefa"
    data-hydro-click="{&quot;event_type&quot;:&quot;feature_preview.clicks.open_modal&quot;,&quot;payload&quot;:{&quot;link_location&quot;:&quot;user_dropdown&quot;,&quot;originating_url&quot;:&quot;https://github.com/apache/incubator-echarts/blob/4.6.0/map/js/world.js&quot;,&quot;user_id&quot;:33627426}}"
    data-hydro-click-hmac="56db4b278e9430eb7b0ae50ee448515717fdec921266435b21a17f9af655c1db"
  >
    Feature preview
  </button>
    <span class="feature-preview-indicator js-feature-preview-indicator" hidden></span>
</div>

    <a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
    <a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">Settings</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="VK2kWwJsvY575kuskgO5BwXzrXghVuAL96D1Le6t+YYGWPOBZPV7KaqFwa1GX11Arm6lRW8loF0gtfOldC6+og==" />
      
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
        Sign out
      </button>
      <input type="text" name="required_field_dc68" hidden="hidden" class="form-control" /><input type="hidden" name="timestamp" value="1588769143565" class="form-control" /><input type="hidden" name="timestamp_secret" value="ee26ec1872c87b199e4ae7beee375b55fbfa8273cce9e533b4477cac7a097ddd" class="form-control" />
</form>  </details-menu>
</details>

  </div>

</header>

        

    </div>

  <div id="start-of-content" class="show-on-focus"></div>




    <div id="js-flash-container">


  <template class="js-flash-template">
    <div class="flash flash-full  js-flash-template-container">
  <div class="container-lg px-2" >
    <button class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
    </button>
    
      <div class="js-flash-template-message"></div>

  </div>
</div>
  </template>
</div>


      

  <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>




  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main  >
      

  




  









  <div class="pagehead repohead hx_repohead readability-menu bg-gray-light pb-0 pt-0 pt-lg-3">

    <div class="d-flex container-lg mb-4 p-responsive d-none d-lg-flex">

      <div class="flex-auto min-width-0 width-fit mr-3">
        <h1 class="public  d-flex flex-wrap flex-items-center break-word float-none ">
  <span class="flex-self-stretch" style="margin-top: -2px;">
      <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  </span>
  <span class="author ml-2 flex-self-stretch" itemprop="author">
    <a class="url fn" rel="author" data-hovercard-type="organization" data-hovercard-url="/orgs/apache/hovercard" href="/apache">apache</a>
  </span>
  <span class="path-divider flex-self-stretch">/</span>
  <strong itemprop="name" class="mr-2 flex-self-stretch">
    <a data-pjax="#js-repo-pjax-container" href="/apache/incubator-echarts">incubator-echarts</a>
  </strong>
  
</h1>


      </div>

      <ul class="pagehead-actions flex-shrink-0 " >



    <li >
      
    <details class="dropdown details-reset details-overlay d-inline-block float-left"
      data-deferred-details-content-url="/apache/incubator-echarts/used_by_contents"
    >
      <summary class="btn btn-sm btn-with-count" data-menu-button>
        <svg class="octicon octicon-package v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1 4.27v7.47c0 .45.3.84.75.97l6.5 1.73c.16.05.34.05.5 0l6.5-1.73c.45-.13.75-.52.75-.97V4.27c0-.45-.3-.84-.75-.97l-6.5-1.74a1.4 1.4 0 00-.5 0L1.75 3.3c-.45.13-.75.52-.75.97zm7 9.09l-6-1.59V5l6 1.61v6.75zM2 4l2.5-.67L11 5.06l-2.5.67L2 4zm13 7.77l-6 1.59V6.61l2-.55V8.5l2-.53V5.53L15 5v6.77zm-2-7.24L6.5 2.8l2-.53L15 4l-2 .53z"></path></svg>
        Used by
        <div class="dropdown-caret"></div>
      </summary>
      <include-fragment accept="text/fragment+html">
        <div class="dropdown-menu dropdown-menu-s p-3 text-center" style="width:360px;">
          <img width="32" height="32" alt="Loading..." class="my-0" src="https://github.githubassets.com/images/spinners/octocat-spinner-64.gif" />
          <p class="pt-1 m-0 f5 text-gray-light">
            Loading dependents...
          </p>
        </div>
      </include-fragment>
    </details>
    <a class="social-count"
      href="/apache/incubator-echarts/network/dependents?package_id=UGFja2FnZS00OTM0MjM2ODI%3D"
      aria-label="68717 repositories depend on this package"
    >
      68.7k
    </a>

    </li>

  <li>
    
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" class="clearfix js-social-form js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="6svk24Rj2Jrx7OR7uEhJLF+usM08IZwGHrYLacFWBP3Wntj2uvuTcEjB74sPOa8PPYMQbs6SUlXO69hdHuP9hw==" />      <input type="hidden" name="repository_id" value="9185792">

      <details class="details-reset details-overlay select-menu float-left">
        <summary class="select-menu-button float-left btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:9185792,&quot;originating_url&quot;:&quot;https://github.com/apache/incubator-echarts/blob/4.6.0/map/js/world.js&quot;,&quot;user_id&quot;:33627426}}" data-hydro-click-hmac="ea8535e18bd9f45aa7670b4b8dda258c1caf0340bdb12e698d0aa49729a8f80f" data-ga-click="Repository, click Watch settings, action:blob#show">          <span data-menu-button>
              <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
              Watch
          </span>
</summary>        <details-menu
          class="select-menu-modal position-absolute mt-5"
          style="z-index: 99;">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
          </div>
          <div class="select-menu-list">
            <button type="submit" name="do" value="included" class="select-menu-item width-full" aria-checked="true" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Not watching</span>
                <span class="description">Be notified only when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                  Watch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="release_only" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Releases only</span>
                <span class="description">Be notified of new releases, and when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                  Unwatch releases
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="subscribed" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Watching</span>
                <span class="description">Be notified of all conversations.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                  Unwatch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="ignore" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Ignoring</span>
                <span class="description">Never be notified.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-mute v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"></path></svg>
                  Stop ignoring
                </span>
              </div>
            </button>
          </div>
        </details-menu>
      </details>
        <a class="social-count js-social-count"
          href="/apache/incubator-echarts/watchers"
          aria-label="2019 users are watching this repository">
          2k
        </a>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <form class="starred js-social-form" action="/apache/incubator-echarts/unstar" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="hMTpOXpPjjS9+b5Gi2fkiMtWg3yhygALSRt2SQaPgecJbAt/Iun1d37cQcMo4KK3NsE+vgmyFiC/tJ9sGNgJoQ==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Unstar apache/incubator-echarts" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;UNSTAR_BUTTON&quot;,&quot;repository_id&quot;:9185792,&quot;originating_url&quot;:&quot;https://github.com/apache/incubator-echarts/blob/4.6.0/map/js/world.js&quot;,&quot;user_id&quot;:33627426}}" data-hydro-click-hmac="b8e601390bad8b4ac6bc442b25d0a8303c5424140058b3372c61681c78af44a6" data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">        <svg height="16" class="octicon octicon-star v-align-text-bottom" vertical_align="text_bottom" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>

        Unstar
</button>        <a class="social-count js-social-count" href="/apache/incubator-echarts/stargazers"
           aria-label="40836 users starred this repository">
           40.8k
        </a>
</form>
    <form class="unstarred js-social-form" action="/apache/incubator-echarts/star" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="x/0uMCyA/ehwNS65hMteC/Bziwb2Xy+h8OXADunp3WqIWS1gVYA+55JIrTahVBM3v8mmsDKiwiEwTyU8zsgm6Q==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Star apache/incubator-echarts" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:9185792,&quot;originating_url&quot;:&quot;https://github.com/apache/incubator-echarts/blob/4.6.0/map/js/world.js&quot;,&quot;user_id&quot;:33627426}}" data-hydro-click-hmac="d0f71cbc171dea09b92d3e6495659e224d842203f406637decf1e7ee4b022076" data-ga-click="Repository, click star button, action:blob#show; text:Star">        <svg height="16" class="octicon octicon-star v-align-text-bottom" vertical_align="text_bottom" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>

        Star
</button>        <a class="social-count js-social-count" href="/apache/incubator-echarts/stargazers"
           aria-label="40836 users starred this repository">
          40.8k
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="btn-with-count" action="/apache/incubator-echarts/fork" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="Wtz7n2aRnjHMR2dI4MDxTt9y+zE52vWzulR9ly2NPlwjXviyjnY3F8FVasyWbEtWfW6isF0TaoOt2vL5QQky2Q==" />
            <button class="btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FORK_BUTTON&quot;,&quot;repository_id&quot;:9185792,&quot;originating_url&quot;:&quot;https://github.com/apache/incubator-echarts/blob/4.6.0/map/js/world.js&quot;,&quot;user_id&quot;:33627426}}" data-hydro-click-hmac="d23351c3009e50d627296648586f3a722a3360e6688c506eb18b93a10d629e96" data-ga-click="Repository, show fork modal, action:blob#show; text:Fork" type="submit" title="Fork your own copy of apache/incubator-echarts to your account" aria-label="Fork your own copy of apache/incubator-echarts to your account">              <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
              Fork
</button></form>
    <a href="/apache/incubator-echarts/network/members" class="social-count"
       aria-label="14062 users forked this repository">
      14.1k
    </a>
  </li>
</ul>

    </div>
      <nav class="js-repo-nav js-sidenav-container-pjax clearfix hx_reponav reponav p-responsive d-none d-lg-block container-lg"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">
  <ul class="list-style-none">
    <li  itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /apache/incubator-echarts/tree/4.6.0" href="/apache/incubator-echarts/tree/4.6.0">
        <div class="d-inline"><svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg></div>
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </li>

      <li  itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /apache/incubator-echarts/issues" href="/apache/incubator-echarts/issues">
          <div class="d-inline"><svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg></div>
          <span itemprop="name">Issues</span>
          <span class="Counter">1,763</span>
          <meta itemprop="position" content="2">
</a>      </li>

    <li  itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a data-hotkey="g p" data-skip-pjax="true" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /apache/incubator-echarts/pulls" href="/apache/incubator-echarts/pulls">
        <div class="d-inline"><svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0010 15a1.993 1.993 0 001-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v6.56A1.993 1.993 0 002 15a1.993 1.993 0 001-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg></div>
        <span itemprop="name">Pull requests</span>
        <span class="Counter">75</span>
        <meta itemprop="position" content="4">
</a>    </li>


      <li itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement" class="position-relative float-left ">
        <a data-hotkey="g w" data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="repo_actions /apache/incubator-echarts/actions" href="/apache/incubator-echarts/actions">
          <div class="d-inline"><svg class="octicon octicon-play" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 8A7 7 0 110 8a7 7 0 0114 0zm-8.223 3.482l4.599-3.066a.5.5 0 000-.832L5.777 4.518A.5.5 0 005 4.934v6.132a.5.5 0 00.777.416z"></path></svg></div>
          Actions
</a>
      </li>

      <li >
        <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /apache/incubator-echarts/projects" href="/apache/incubator-echarts/projects">
          <div class="d-inline"><svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"></path></svg></div>
          Projects
          <span class="Counter">1</span>
</a>      </li>

      <li >
        <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /apache/incubator-echarts/wiki" href="/apache/incubator-echarts/wiki">
          <div class="d-inline"><svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg></div>
          Wiki
</a>      </li>

      <li >
        <a data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="security overview alerts policy token_scanning code_scanning /apache/incubator-echarts/security" href="/apache/incubator-echarts/security">
          <div class="d-inline"><svg class="octicon octicon-shield" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 2l7-2 7 2v6.02C14 12.69 8.69 16 7 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L7 1l6 1.75v5.268C13 12.104 8.449 15 7 15c-1.449 0-6-2.896-6-6.982V2.75zm1 .75L7 2v12c-1.207 0-5-2.482-5-5.985V3.5z"></path></svg></div>
          Security
              <span class="Counter js-security-tab-count" data-url="/apache/incubator-echarts/security/overall-count" hidden></span>
</a>      </li>

      <li >
        <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people /apache/incubator-echarts/pulse" href="/apache/incubator-echarts/pulse">
          <div class="d-inline"><svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg></div>
          Insights
</a>      </li>


  </ul>
</nav>

  <div class="reponav-wrapper reponav-small d-lg-none">
  <nav class="reponav js-reponav text-center no-wrap"
       itemscope
       itemtype="http://schema.org/BreadcrumbList">

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a class="js-selected-navigation-item selected reponav-item" itemprop="url" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /apache/incubator-echarts/tree/4.6.0" href="/apache/incubator-echarts/tree/4.6.0">
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /apache/incubator-echarts/issues" href="/apache/incubator-echarts/issues">
          <span itemprop="name">Issues</span>
          <span class="Counter">1,763</span>
          <meta itemprop="position" content="2">
</a>      </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /apache/incubator-echarts/pulls" href="/apache/incubator-echarts/pulls">
        <span itemprop="name">Pull requests</span>
        <span class="Counter">75</span>
        <meta itemprop="position" content="4">
</a>    </span>


      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /apache/incubator-echarts/projects" href="/apache/incubator-echarts/projects">
          <span itemprop="name">Projects</span>
          <span class="Counter">1</span>
          <meta itemprop="position" content="5">
</a>      </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_actions /apache/incubator-echarts/actions" href="/apache/incubator-echarts/actions">
          <span itemprop="name">Actions</span>
          <meta itemprop="position" content="6">
</a>      </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_wiki /apache/incubator-echarts/wiki" href="/apache/incubator-echarts/wiki">
          <span itemprop="name">Wiki</span>
          <meta itemprop="position" content="7">
</a>      </span>

      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="security overview alerts policy token_scanning code_scanning /apache/incubator-echarts/security" href="/apache/incubator-echarts/security">
        <span itemprop="name">Security</span>
            <span class="Counter js-security-deferred-tab-count" hidden></span>
        <meta itemprop="position" content="8">
</a>
      <a class="js-selected-navigation-item reponav-item" data-selected-links="pulse /apache/incubator-echarts/pulse" href="/apache/incubator-echarts/pulse">
        Pulse
</a>
      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="community /apache/incubator-echarts/community" href="/apache/incubator-echarts/community">
          Community
</a>      </span>

  </nav>
</div>


  </div>

  

  <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>


<div class="container-lg clearfix new-discussion-timeline  p-responsive">
  <div class="repository-content ">

    
    

  


    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/apache/incubator-echarts/blob/f4fc1b0625f3c88b9f4dbed03eeb091ed6bd1079/map/js/world.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v22:77a0aa52648ea914e6c78701035e3cb1 -->
    

    <div class="d-flex flex-items-start flex-shrink-0 flex-column flex-md-row pb-3">
      <span class="d-flex flex-justify-between width-full width-md-auto">
        
<details class="details-reset details-overlay branch-select-menu " id="branch-select-menu">
  <summary class="btn css-truncate btn-sm"
           data-hotkey="w"
           title="Switch branches or tags">
    <i>Tag:</i>
    <span class="css-truncate-target" data-menu-button>4.6.0</span>
    <span class="dropdown-caret"></span>
  </summary>

  <details-menu class="SelectMenu SelectMenu--hasFilter" src="/apache/incubator-echarts/refs/4.6.0/map/js/world.js?source_action=show&amp;source_controller=blob" preload>
    <div class="SelectMenu-modal">
      <include-fragment class="SelectMenu-loading" aria-label="Menu is loading">
        <svg class="octicon octicon-octoface anim-pulse" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"></path></svg>
      </include-fragment>
    </div>
  </details-menu>
</details>

        <div class="BtnGroup flex-shrink-0 d-md-none">
          <a href="/apache/incubator-echarts/find/4.6.0"
                class="js-pjax-capture-input btn btn-sm BtnGroup-item"
                data-pjax
                data-hotkey="t">
            Find file
          </a>
          <clipboard-copy value="map/js/world.js" class="btn btn-sm BtnGroup-item">
            Copy path
          </clipboard-copy>
        </div>
      </span>
      <h2 id="blob-path" class="breadcrumb flex-auto min-width-0 text-normal flex-md-self-center ml-md-2 mr-md-3 my-2 my-md-0">
        <span class="js-repo-root text-bold"><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="true" href="/apache/incubator-echarts/tree/4.6.0"><span>incubator-echarts</span></a></span></span><span class="separator">/</span><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="true" href="/apache/incubator-echarts/tree/4.6.0/map"><span>map</span></a></span><span class="separator">/</span><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="true" href="/apache/incubator-echarts/tree/4.6.0/map/js"><span>js</span></a></span><span class="separator">/</span><strong class="final-path">world.js</strong>
          <span class="separator">/</span><details class="details-reset details-overlay d-inline" id="jumpto-symbol-select-menu">
  <summary class="btn-link link-gray css-truncate" aria-haspopup="true" data-hotkey="r" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_blob_definitions&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_blob_definitions&quot;,&quot;repository_id&quot;:9185792,&quot;ref&quot;:&quot;4.6.0&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/apache/incubator-echarts/blob/4.6.0/map/js/world.js&quot;,&quot;user_id&quot;:33627426}}" data-hydro-click-hmac="068f9816372412e77c6edf12d19d3c2aec4ad6f5f07dfd2d5f86feb61c127515">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
    <span data-menu-button>Jump to</span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="SelectMenu SelectMenu--hasFilter" role="menu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <span class="SelectMenu-title">Code definitions</span>
        <button class="SelectMenu-closeButton" type="button" data-toggle-for="jumpto-symbol-select-menu">
          <svg aria-label="Close menu" class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
        </button>
      </header>
        <div class="SelectMenu-filter">
          <input
            class="SelectMenu-input form-control js-filterable-field"
            id="jumpto-symbols-filter-field"
            type="text"
            autocomplete="off"
            spellcheck="false"
            autofocus
            placeholder="Filter definitions"
            aria-label="Filter definitions">
        </div>
      <div class="SelectMenu-list">
        <div data-filterable-for="jumpto-symbols-filter-field" data-filterable-type="substring">
        </div>
      </div>
      <footer class="SelectMenu-footer">
        <div class="d-flex flex-justify-between">
          Code navigation index up-to-date
          <svg class="octicon octicon-primitive-dot text-green" viewBox="0 0 8 16" version="1.1" width="8" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path></svg>
        </div>
      </footer>
    </div>
  </details-menu>
</details>

      </h2>

      <div class="BtnGroup flex-shrink-0 d-none d-md-inline-block">
        <a href="/apache/incubator-echarts/find/4.6.0"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy value="map/js/world.js" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
    </div>



    
  <div class="Box Box--condensed d-flex flex-column flex-shrink-0 mb-3">
      <div class="Box-body d-flex flex-justify-between bg-blue-light flex-column flex-md-row flex-items-start flex-md-items-center">
        <span class="pr-md-4 f6">
          <a rel="contributor" data-skip-pjax="true" data-hovercard-type="user" data-hovercard-url="/users/pissang/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/pissang"><img class="avatar avatar-user" src="https://avatars2.githubusercontent.com/u/841551?s=40&amp;v=4" width="20" height="20" alt="@pissang" /></a>
          <a class="text-bold link-gray-dark lh-default v-align-middle" rel="contributor" data-hovercard-type="user" data-hovercard-url="/users/pissang/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/pissang">pissang</a>
            <span class="lh-default v-align-middle">
              <a data-pjax="true" title="Add license header comment on each source file" class="link-gray" href="/apache/incubator-echarts/commit/0d5e6d9f32bef1f1face878f9ccf9987a80ab339">Add license header comment on each source file</a>
            </span>
        </span>
        <span class="d-inline-block flex-shrink-0 v-align-bottom f6 mt-2 mt-md-0">
          <a class="pr-2 text-mono link-gray" href="/apache/incubator-echarts/commit/0d5e6d9f32bef1f1face878f9ccf9987a80ab339" data-pjax>0d5e6d9</a>
          <relative-time datetime="2018-04-23T05:31:41Z" class="no-wrap">Apr 23, 2018</relative-time>
        </span>
      </div>

    <div class="Box-body d-flex flex-items-center flex-auto f6 border-bottom-0 flex-wrap" >
      <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark float-left mr-2" id="blob_contributors_box">
        <summary class="btn-link">
          <span><strong>3</strong> contributors</span>
        </summary>
        <details-dialog
          class="Box Box--overlay d-flex flex-column anim-fade-in fast"
          aria-label="Users who have contributed to this file"
          src="/apache/incubator-echarts/contributors-list/master/map/js/world.js" preload>
          <div class="Box-header">
            <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
              <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
            </button>
            <h3 class="Box-title">
              Users who have contributed to this file
            </h3>
          </div>
          <include-fragment class="octocat-spinner my-3" aria-label="Loading..."></include-fragment>
        </details-dialog>
      </details>
        <span class="">
    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/pissang/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/apache/incubator-echarts/commits/master/map/js/world.js?author=pissang">
      <img class="avatar mr-1 avatar-user" src="https://avatars2.githubusercontent.com/u/841551?s=40&amp;v=4" width="20" height="20" alt="@pissang" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/chfw/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/apache/incubator-echarts/commits/master/map/js/world.js?author=chfw">
      <img class="avatar mr-1 avatar-user" src="https://avatars1.githubusercontent.com/u/4280312?s=40&amp;v=4" width="20" height="20" alt="@chfw" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/100pah/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/apache/incubator-echarts/commits/master/map/js/world.js?author=100pah">
      <img class="avatar mr-1 avatar-user" src="https://avatars3.githubusercontent.com/u/1956569?s=40&amp;v=4" width="20" height="20" alt="@100pah" /> 
</a>
</span>

    </div>
  </div>






    <div class="Box mt-3 position-relative
      ">
      
<div class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">
  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">

      20 lines (19 sloc)
      <span class="file-info-divider"></span>
    144 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/apache/incubator-echarts/raw/4.6.0/map/js/world.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/apache/incubator-echarts/blame/4.6.0/map/js/world.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/apache/incubator-echarts/commits/4.6.0/map/js/world.js">History</a>
    </div>


    <div>
          <button class="btn-octicon disabled tooltipped tooltipped-nw js-remove-unless-platform"
             data-platforms="windows,mac" type="button"  disabled
             aria-label="You must be on a branch to open this file in GitHub Desktop">
              <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </button>

          <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
            aria-label="You must be on a branch to make or propose changes to this file">
            <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 011.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
          </button>
          <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
            aria-label="You must be on a branch to make or propose changes to this file">
            <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
          </button>
    </div>
  </div>
</div>


        <div class="js-notice border-bottom p-2">
          <div class="d-flex rounded-1 code-navigation-banner">
            <div class="col-6 pt-4 pl-4 pb-4">
              <div class="d-flex flex-items-center f6">
                <h3 class="mr-2">Code navigation is available!</h3>
              </div>
              <p class="text-gray pt-2">
                Navigate your code with ease. Click on function and method calls to jump to their definitions or references in the same repository.
                <a href="https://help.github.com/en/articles/navigating-code-on-github">Learn more</a>
              </p>
            </div>
            <div class="col-6 p-2 text-right code-navigation-banner-illo">
              <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-notice-dismiss" action="/settings/dismiss-notice/aleph_code_navigation_banner" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="7Dvv78krtaUfZPNNryTzqfE6CKGZAXB7esUsDTy397xZY0Jt1nKTiGxIyv6JaKV4JFv6Qu0jDG0C7Fxq7N4spw==" />
                <button name="button" type="submit" class="btn-link link-gray" aria-label="Dismiss">
                  <svg width="20" height="20" class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
</button></form>            </div>
          </div>
        </div>

      

  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-javascript ">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="4" data-paste-markdown-skip>
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">/*</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">* Licensed to the Apache Software Foundation (ASF) under one</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">* or more contributor license agreements.  See the NOTICE file</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">* distributed with this work for additional information</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">* regarding copyright ownership.  The ASF licenses this file</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">* to you under the Apache License, Version 2.0 (the</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">* &quot;License&quot;); you may not use this file except in compliance</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">* with the License.  You may obtain a copy of the License at</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">*</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">*   http://www.apache.org/licenses/LICENSE-2.0</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">*</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">* Unless required by applicable law or agreed to in writing,</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">* software distributed under the License is distributed on an</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">* &quot;AS IS&quot; BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">* KIND, either express or implied.  See the License for the</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">* specific language governing permissions and limitations</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">* under the License.</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">*/</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">(function (root, factory) {if (typeof define === &#39;function&#39; &amp;&amp; define.amd) {define([&#39;exports&#39;, &#39;echarts&#39;], factory);} else if (typeof exports === &#39;object&#39; &amp;&amp; typeof exports.nodeName !== &#39;string&#39;) {factory(exports, require(&#39;echarts&#39;));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== &#39;undefined&#39;) {console &amp;&amp; console.error &amp;&amp; console.error(msg);}};if (!echarts) {log(&#39;ECharts is not Loaded&#39;);return;}if (!echarts.registerMap) {log(&#39;ECharts Map is not loaded&#39;);return;}echarts.registerMap(&#39;world&#39;, {&quot;type&quot;:&quot;FeatureCollection&quot;,&quot;crs&quot;:{&quot;type&quot;:&quot;name&quot;,&quot;properties&quot;:{&quot;name&quot;:&quot;urn:ogc:def:crs:OGC:1.3:CRS84&quot;}},&quot;features&quot;:[{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@࠿@ᠳ࡚с̶ʩт˷˔ƹͮɠͲ˖рԜ׷҄̕ҴNܾͰؼ÷۸ήԪҮƴ̮¿ঞɪֶϤϲŹƛе²֭ĝǱƊĠǔōϭñėށ؅ਓɁȥԯ঻ƻԓࣗඩअ৯۝ڻो֑য়ߝล໥ϓ؇UļāļƫȖɩ̌]ᶼ̈́͘ɮ͜ɪ͚®ĞĚ۪ƼɦːϪǰ;Ąߞᢌᣮ&quot;],&quot;encodeOffsets&quot;:[[49130,8189]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Somalia&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ƛ¬Ð@ĞÆÒªǱ&quot;],&quot;encodeOffsets&quot;:[[9810,48188]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Liechtenstein&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@⌗øĒ୬ͪࣆيʊˆ҄ؔ^˶ȇɪÈצϲ֌ĐФ؜ְദ׼ҢڴήࡔլİtʍԾ΃ʤ՘ĲʢË΢ǒŎɽĠPĀmǶVǢgΤ̑ĮவňȵǑ¼ýĈå²yĞÇÞ³ëąÍĥʹ೵]É³Ɨ{ΡŉƑcăZÉSÍƫH˃ǨǓѭǇƣġǥÕȿÕǃñÿśıƇħěŽđұĿЍUƉÝåSĵ^čfʉdʇǍ·ণ֣oۋ@Ĺ&quot;],&quot;encodeOffsets&quot;:[[-8891,28445]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Morocco&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@⌘@ķœ@@@Ŕ@@̷@̩@ǕBȍ@ȋ@ƍ@ĩ᫫@@ɋ@΃@ɭ@ŕ@қ@΃Oх̉űƽw½gΉɩķƯtįQJǳ՟TšRšPėRŏᇷCฝCċα`ý§¨Ƙ࢘Ӕ׎ŰшΞ׎ǇĹèƤ࠴݂Ģָ͌܌۴КͲޞŚƀ&quot;,&quot;@@i˷@@j˸&quot;],&quot;encodeOffsets&quot;:[[-13351,28480],[-8984,28120]]},&quot;properties&quot;:{&quot;name&quot;:&quot;W. Sahara&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@A@ƟwđĵȏÒʁč«Ǔƅ@ã̌Ο˘SǴʒÊÆ`Å_֡˰ϟʊkIDZʪĠɁ˔˶àϷˈȘѬ˻W²ɤ˲ÚͩǀºĬȋːÈĆѠŎǊĘȘoø`Ȓg¤_cº·¶ÙȈėÒ÷´fFfV\\T^Qhɿ՘ɳkĝƱƨ÷YißMµGuODƎĨãɰİÈßĜhŴĬŬ~Ũ±âZ]ãNÇk¹ėǌƽɣȭkěHãƺ˝Ǵč¬­¡İÃƩǝÿďȫẸ̀Qßço}ß]ĕUΥ@Ʌ±@@&quot;],&quot;encodeOffsets&quot;:[[22080,43262]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Serbia&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@хǑޟܯőࡡԧ¡á͘з¤̧սշŊƉˏͭąٝ°̺׿ٓɥɓӱз·ʫɫƚν@ӧʟƆƋʇğԻzЛϭĭ޿ॕʳכ]ʛŷѿĘࣻõЍĺٵȀ͋ĠШъȒȢȌȜxèFƆ·ǴăĆˁȡ|ɍZ{ƒZØaŤDĠƲDèĳ̎őͨaŦ̰̚˽êóļ@͒ƂǲȸZíĊ´ubSv\\vÀTÎ hňǞjΔö´ƌFgÈèTɶǓЀ«Ȁǫ͊î̲ǆzĺîĢƘ؜Ɣ˒Ř˞ǈ°òńƲъÖŖ¾ŚǶRɄJǮˊרȋ¦HʲpȮńċľsĺ¤ÚR|¼[þJ¬wNwNÌÛļûĢmǌÂpp^ªô¤ʂĸ®T¸SZ^b\\~VvL¤QȂƓî§R¦¼¶^ê}ĞlôÒÈŒǐ`ƐǢbÀèHĎ±ĸ^ǠŶˌ̆ѨīÞŗ­ɃaÎJĊtÄB~oűځĈʁŔů࠰˨ȦȨˈŢƠ®ĈRľsª_ÂW\\a÷ËvkĄOΘĈ²ʹkÒČÑ¼­§MÕryWJ·oğ}ƽáHiĸã|u^Q&quot;],&quot;encodeOffsets&quot;:[[76331,37911]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Afghanistan&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ÂR̮cҮƠ͎Åǖ@ǔ|ɔDªĞƶHǊŖ̈ƄĺTǊ|ʖĞGR_¿ƽA½n½¦ʬGɼEҾi°oČ଩ýٵ͔ӑĠճēśnʕ¬ÓIàþÖÚ~ɈqɘM͚Ĳ̴ŐŢdܓ×މoěG±ðƁIĵY൑@ȗ@@ڟ@ˑ@ˑBౝǶ֡া࡙ࢳǑ೟Ƶҧƀ਩¼ҹͺሹTᅍeғ̴ʟÌՋȭǃNOėFǗģµƇo͆ƖËܼɠˌ҆ლζ֌θɌƴȞǀЊ¢ݐс޴˫ߚ̢̤hˊүஒґۤݴɦƌOՎNዲQĮĘÇƈǕϡÐŻĚƉÆ˕Ԃۻ&quot;],[&quot;@@̆Ƅ_øęÞËr___ğıͅ˭DeÌ·ӏɫθƅːОΖ&quot;]],&quot;encodeOffsets&quot;:[[[18002,-8293]],[[12802,-4697]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Angola&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@Π˗ä̋ÝԍȄ́ɊßQÙÚŷűŻȉ̍ǝ©¡aquwW@yÐğBƧůÙPÑXkAűˬѽ̨ŚAĹɐȨࠐDŮȡæ½ʮ̾ϦŒŷɴÒ&quot;],&quot;encodeOffsets&quot;:[[20546,43569]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Albania&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@Ł^ĊĤ³&quot;],[&quot;@@ɨ÷ϫƯħƾƊ¡sƜƖ&quot;]],&quot;encodeOffsets&quot;:[[[20135,61632]],[[20470,61800]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Aland&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@Ɵ½íIir[ò\\¢Ö ÈOŢ~y@esQm&quot;],&quot;encodeOffsets&quot;:[[1747,43524]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Andorra&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ʙOǘøĂç&quot;],[&quot;@@šȆĶãŷ&quot;],[&quot;@@ø֟˗ȫÁǸǣïԿƖw´ŷѡĹÂĹ˧څ[˥ççᒣʾ߳४oǪǘÚȱɴѼƸॺí̆ĐȾĚ̌҂ৎࠠŞɦò_m̙ź&quot;]],&quot;encodeOffsets&quot;:[[[55223,24758]],[[54613,24841]],[[57650,26267]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;United Arab Emirates&quot;,&quot;childNum&quot;:3}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ؠQۓƫĵÜǪĢ&quot;],[&quot;@@nᇜ͠έǇvµǥˠŸɏ׶УࢸНࢴŧʕȣ࢑įԭņ౳¦&quot;],[&quot;@@ȴǛߖȡפϿବӗɒ˳͉ӡȧɇ˽ͫЛoÁıξบɿɮȜǴGƌùÚDæ¶ÌEæ¶Ì rºʒàǞȔɌͦʮbΰƠ¥ʐĒɜũȈԵƛ۩ЧʩхŃɫˇԽ˳ƩǟXࢣ਍ʉƽƯɃƅę¡ě½õĳģă¾ɣÙßdƕqùşȅißlgĝëĿēk©z¿HÃiÉZÇÁEÕáųeû¤ͩɅŷĻҩžѻőēȰ͗آ˯͆˿Ʒ̛fʳɔɧ˜¥ÞщܿਟՍ̍൱ͷઃŻأУƊϋȰŉŁMĒå¯̩ŽÍīʩžБůǻӃǿ֋¥਻ΤɛŧŬਅϘŷƋŴcˎňƗ¢θĖƒƙZ΍Εƻϟ̲ЛŹ³ýתǭѫȁ΋͏Yש͏͍R̅ҧكʗցڛþؖ͟ӁٺóɖɁÛʗΉǁʔ@ľĩൿࡕǿʛş֡γƻ·̒LƷˋÉ͎KƨůԹ˻˃ѹƄƒеίăрýѬ֯ౡ̊࿩fЩϘÊܞƛØգŋ̉Ԩ«֊þŴ˜\\Đʊ͐ƢÌ̮ȒĠvɌǃȞƠ͒ψʔ̶ȬưƧЮȴǨī̀ͮȺȹ̒ϏÚmŎڬRĐǠ«Ĵԛ¶ŞϢȋӨżĢͩȺب̜ǤƉͬiߪȊʼğǤƄž»͖ƲŚ֖Ҙˤʷ۾qޚŘˎմϲUҐŝɶƌČ˺܆ǚÜ߆ɝèÀˊ˻ڨĠł˥͚ÆΞǰłƀ֌ǒFĦƶīĆÉيǘȄƞׄМЪˠ٪Ɉ\\ɰƖɭцƪˈƫ؞Ǫˠƫ̂ʾ̘ݨ̞̈ࢂƽưǢʾɼʚ̆Ē¼ĘİxzEÜ}ǘşöãîSƖ`Ѷ_͘ĳèţħčÔƧ¢ÇdǊʒѾ°࣠Ǽʗî·ƚ÷ƄƣΔӍ׶Ћ&quot;]],&quot;encodeOffsets&quot;:[[[-66098,-56029]],[[-70300,-56170]],[[-62550,-24224]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Argentina&quot;,&quot;childNum&quot;:3}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@́{ř̮ǯŔfƖ˟§ʭôķƶɛ½Г˲Իðą̘ŸȦʁ͚՚Ú؞ÞǆǀťıÑѢȓǫƣÜşєʣßǫʳ¡Ժ͏ɼīŷȀƭƹúʇ&quot;],&quot;encodeOffsets&quot;:[[47607,39841]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Armenia&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@āɆƃë&quot;],&quot;encodeOffsets&quot;:[[-174823,-14695]]},&quot;properties&quot;:{&quot;name&quot;:&quot;American Samoa&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@īƨǜMïƙ&quot;],[&quot;@@΂ŜªūȩÃŚÕٸǔȢťƙțȃúͽñȐŵɖ¨ĻƣࠅƦƇƥƫJÌ҈ħĊȜͼŒǗëȃŐy&quot;],[&quot;@@ƥÈè þħ&quot;]],&quot;encodeOffsets&quot;:[[[70946,-50236]],[[70846,-50288]],[[53079,-47554]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Fr. S. Antarctic Lands&quot;,&quot;childNum&quot;:3}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ťowîÐÒĎŏ&quot;],&quot;encodeOffsets&quot;:[[-63197,17446]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Antigua and Barb.&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ēǡÎƮŸÔı&quot;],[&quot;@@Ȫb࢈ͥ;ðŀùŢƨϸQƖƂɂyĄþȺÙńଡŇȶʏԑlԟƇñĈ§ĐŸþȏêķǁŻȲ­ΧȻºæĳǡ˱˙Ĕщ£ƞǴ¼˫p͕̮ʏאɨɗ¢ŚƹǪą¥FƪЅՊĵΆÔʸ˚ĩ&quot;],[&quot;@@£ÝÏÒĴL&quot;],[&quot;@@éżBÑ&quot;],[&quot;@@ÞƯ͑êʴĆ&quot;],[&quot;@@ʠȓbƿǩõ˵͢ȞĨ&quot;],[&quot;@@÷ǲƌ˖Š̻ǳƋ&quot;],[&quot;@@Çȏ|ƾ&quot;],[&quot;@@˪ZǎŁϟȅƩȩüϡ¥ǷŤĈŢגƀɀyXı&quot;],[&quot;@@ĥɩRʨĔ}&quot;],[&quot;@@ǿɪcɂȤѫ&quot;],[&quot;@@čǘ¾̞ǂǀéǆĨðþ˫ɭֿ&quot;],[&quot;@@þCȷǡȸĨ&quot;],[&quot;@@ŅÁĮƶXĳ&quot;],[&quot;@@ĕPŊÀř&quot;],[&quot;@@jɇǗȞƮj&quot;],[&quot;@@ľàēģi&quot;],[&quot;@@̉ƙŒɲʚÔĢĵǃµ&quot;],[&quot;@@ųÈÈĮìƵ&quot;],[&quot;@@ÕgIżàœ&quot;],[&quot;@@ěWÌŖĽ&quot;],[&quot;@@ƪdũʉǤģ³ğҷèö̆Țǂ¸Ņ&quot;],[&quot;@@īPþŸnƇ&quot;],[&quot;@@ƃ×ʤǮşŕ&quot;],[&quot;@@Ŭřҿ|żňƴŢŠƒ˽&quot;],[&quot;@@ͼȶŨɪȹӳЩρʸŅΨȠƹ&quot;],[&quot;@@Ñ»ɆΪƳ̭&quot;],[&quot;@@ğɠĂÌ^˫&quot;],[&quot;@@Í̉ʖ˱ƺڭʟǪԝǤĩјȚƦɕ՞ϙŜ௳ˠЉƂǶ؇ÿՙʪɽ¦ΣٌΓɼ^˘͡ࡢѧŀǇŻZĥѪқȾϟɀܥĴ¨ŶƇȰŔŦϸͧxƦĔƞ࢑ʼ˙֬˵ʤЋ˜ǣǔͱɔȗÒ͑ưů¡ਗϬ࢝εӯཝñܹ͓ԡõͥ˫ȩzá̏ťѩ֯W̃ſáĜq̡ЁÉћԟۏɗාϝȯകƍࡧؕ՝ÁĴƕŊ®ÇʱȭɾȉŧȢͥŌŪŢÇŴƷL˩əȯƈǎGǪɆȓǈеȥɨÕृԡࣩκؗĬŋįƛr΍ʌԷưԗնÔӪŅʔٓڔǬ¶ĤóMȢٕɡ˳|˞ӶkɖͳԀͭࠉڷąŌ˘̈́DĒلςӨã͈ŠĚǫѠNȳ̷̉ǡλڵͳҏՋàˑƩĴŧÝѳ̖ĀĊȞÿȗԸˣ˪ĉʢƵŜʳtŅƼÕȘńdNƶӋ˺ϟpϣȒҗ§࣏ј̣ĝഁ±༱ԕ୷ঃӭџŏإݵଗÙ÷İտ¢ಧů͹ͥұģٓэҭģࣃĢѽǊΟ̴ұƞ_ج̬Ŀ˘ϔ`఼Է॔ȃ஖ׇࣀř؞۽঒Ś½ƎȎБŸĒĂbƘϩԴ´ĪɘșVʣŊĬŚʵĊÓŀĖAπڟஔÔӈɤϜшĥɶ˸َĎ¬fջȢŢ˨Ѥغ˨Ұϰא̈́טÉښ̄ҪĨ̒ɢМஊκ˸ʆи۾ј̬ǕӀĪΎϬ̊ɀ̎Ӿ࣫~ЬȨ÷Ǟ͑άŔØeǊĺŊǃƼİɌĻІ]̯ĔXƔƈhÔȲŧďĻǶ¸ɞĺEŌȈ̶ƗTŔƍEÏŲǘƀˊīƫ;ͶȚ¢ȐÞȧƄ¼ÐůŌļѤŊsØƉŨŨƖšǰǤIƖńҰʍ؈֯ġԱðĖĊÕáɊʹɦМğƂɵ¬ʐ̮ɥFʐǲnȳƴþøˍƒ˦Όň΂ΠɪĿƂǀȚɨǾJǺȶŃLǆΘʦŬǫՂGǄĂƂğČƈǞXçö͖ǗƂͷbȿƢŜĸǎŉƬô̌ʁɺĈȊʡ؀ŁќȅˀÌʦǫǂwעͪǽ͑ʮdÖȗƮWÌňáŎǌȆɶɱƬc¨ęΉι¶ǿŏȅƕò̯ƓxՋҥە¤ƑلЗðƓΎīäǫǾ`ל̕ҔС٠ƱȨίڌ̽ЎàˎǮϰߜˬ஀đӲÒˊĹ̘ƢҎˆˈǢɃȼVŠƴ̀úßǨजʎȪŰ©ŁȐȭþץʴŏ&quot;],[&quot;@@ëµ¹ĸÈ¤Þĥ&quot;]],&quot;encodeOffsets&quot;:[[[150893,-44438]],[[148525,-41765]],[[151795,-41487]],[[148260,-41478]],[[151887,-41274]],[[151553,-40711]],[[147383,-41078]],[[148803,-39414]],[[140899,-36596]],[[157224,-28094]],[[115900,-26678]],[[156752,-26368]],[[154775,-24054]],[[118217,-21286]],[[152621,-20778]],[[149789,-18668]],[[142807,-17525]],[[142857,-16970]],[[140384,-16156]],[[127588,-15771]],[[128204,-14929]],[[139996,-14135]],[[139508,-14156]],[[139611,-11880]],[[133591,-11959]],[[133754,-11649]],[[139877,-11651]],[[135776,-11574]],[[146616,-12241]],[[145690,-10961]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Australia&quot;,&quot;childNum&quot;:30}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ñǱʀ͋ãʣթɊśȝŕV̡ͥťŕƻࣃÑ˿ǥ܋ĶǭśFƵ^׃Čù~·¶½ÚĩČo¦I\\wPͥąȻXā]ǁMġÑÝ½iÇOĉLÍfÏ¬ğPčBuTDÆÅjǹőҫǦ«ǶĈǒď´ȌªúoŎÀvqL±Ŕ{cíƼò¨ŔSƨLêoŌGƚŃ२ȐdxMÀZR¸_ð@Ŝcǌ_î}t_aDuvkÎø}Dd~bÒLÚſÊ²ƘǋǼϤǐĜ|òÀ¦ƞXN`TŲAŲNZJłXhȠƑբE͂ͰࠬȱФΆǓ&quot;],&quot;encodeOffsets&quot;:[[17360,49766]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Austria&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@Փň֍ը£¬ɜ¾ĸƵʮóˠ¨eƕǰœŚ̭&quot;],[&quot;@@ݒ࢙ˎǻ΀áƸȋϓ̯ĻȏӯɑǓˋŷĔƃʝ\\͹ɵqԃόʞƒǁȆǾƄ˛ʈ౉ٷùʈƺǿƮĬŸɻԹ͐ʴ¢àǬѓʤÛŠǬƤѡȔĲÒƿŦǺŐÂvڲɟ̂ěĔXüÒðT­´ˁƐķǎȸǄˎßӌѽЈéڂը&quot;]],&quot;encodeOffsets&quot;:[[[47222,39811]],[[49739,42849]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Azerbaijan&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@guûƿcy¤«£ŇR§èöcĘÐOōiƃ͇͟ϟչȕů˃LǇԮZپǭ˪ôľʎǳʶ^ƜàÀ̈́ǀÝʔĔŨñ&quot;],&quot;encodeOffsets&quot;:[[31287,-2457]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Burundi&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ʦq̈ʣȋ˥wAá\\ğí£Í}©͋ʁw՝ɸ£̪ɯǉͫVtɴСºÿƞ˓°Ɠȼ̇{ȟ̆ۚɾèōЂ˘ƮڰêƸǅӨŁđͅ&quot;],&quot;encodeOffsets&quot;:[[5831,51994]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Belgium&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ÁÁŏEĕŶǽbmlʻàƋ¿ǃĿQͻɷȍɽ׏ɧÓ֩aлɍÙÃAck_wL˝óVŃjån»k¥cÇ{ȍ࣫ŹžàȹזĀJqႬǷʾ±ՔӇ͞ŚԜѴϠҮyΆДo˚τƌڒׁ&quot;],&quot;encodeOffsets&quot;:[[3682,11977]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Benin&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@­ΏȀɃ ɯǂɥӪ̃ǱNC˕ӠͿҒÈĸȡŹƁˈ΋΅Гҭzѳϟ΃ҽƊȗ¨˟ȩΑê຋WíͿļƇVֽ^óºĽV«ko¥¥D·ØsÜÜ­­ÃĆ¿ÇYʕǫM͟ŕïÅćÕDķÚĉSąґӂɗĚԮȬ˪ϞӶȼɪɘ©ˮɈĸď˚ƬǀǠĄΜǿȎĈ®͆ʢUÞʬʌɸЊ¹Şʎޤ̨ʐȒѲXϠŭ&quot;],&quot;encodeOffsets&quot;:[[223,15270]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Burkina Faso&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@÷r¢ǆǷ&quot;],[&quot;@@ç\\ƪnā&quot;],[&quot;@@ęÏΒÒ́&quot;],[&quot;@@ũĀŠĐȟ&quot;],[&quot;@@əqƒɚƫѐĀzɮ͇ùͩ&quot;],[&quot;@@|JeƊÊAɪ̻ɖnńĊæŶɫD͍oȉZ¬WɆÕв«ாDΚȍéāőo[Aġğɷ­ĳǽǗĳ|̓ŧǃͱǖӻÞŌİǩÈWŎÖFȠÖŰŦQĀ@ô¦LÆ[ǞLòχzˁĒǍx¥Î՗\\ÏPVЇƉʧŒŵūŨуɣ͐ǉনÇ«ˉӴɛȱɩʑή©ӆ£ƛʉ˔ǃſѝƲ͓͝ҁƇ¶ŜɨɉőþÈ̎ơЛȱǻïђḍūǋɓŶ͸ŉ̜iǰ¥ǔàŬǡÌuȦ¿¶ËľŐˠ\\Ê\\ĮNUå¨ťjƉĜĥNátÉÄ¯ÞL`¤ĖǜLúAºäìȐİ@̚\\ÊõïƂɡ̗ɲ~ȸƶƜĚĦ­ĐXfæŰƒȏɐ&quot;]],&quot;encodeOffsets&quot;:[[[94157,22025]],[[94079,22357]],[[93339,22708]],[[93755,22920]],[[92957,22620]],[[91076,26876]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Bangladesh&quot;,&quot;childNum&quot;:6}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ĵ̓˧NǡǭνͻɿѼнҏmƱŐ¥\\ȝéɧuÇËÏŵsySyFyĵxÿckkgÞŵXñg¥ÍţśfɏŧŋiБĦƫòwr§î}FγyoµkQ́ÕċAđZ½SōGëÁȫ^ôͺƕɈЯːà^p~àèRQnół~ǴˬŦƪǞįÄ¢«®ǳĎƹ˞GäĜlĄÀŠŠ˸ƩƇŉ¨ħᓞƏ؀˲ܸƈ˶ŭϬ˴Ƿ̨}&quot;],&quot;encodeOffsets&quot;:[[29272,44793]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Bulgaria&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ÛĝƄHɜĬXl̛&quot;],&quot;encodeOffsets&quot;:[[51822,26505]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Bahrain&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@řǵѡGBņƂôʎƪƄĵ&quot;],[&quot;@@ʚďΏ¬Ķ¤&quot;],[&quot;@@Ï{̶̀¡ǀĖ`\\ǉ̵˙&quot;],[&quot;@@ǽWņɀĭ&quot;],[&quot;@@͏ɬþĒƻʹЎٱ&quot;],[&quot;@@̻źxÌ̄ȅ&quot;],[&quot;@@ĹĉrŖĈ&quot;],[&quot;@@ćïŞ¬®áWͯǓ\\ȓϾ˼|&quot;],[&quot;@@Ǐ»Ăńˋ΢ΚЩ&quot;],[&quot;@@Ƿ`ʊvÑ&quot;],[&quot;@@CȳʣƧďǦȃ¨ËêǊvҌȤęȚ̓&quot;],[&quot;@@ʰſǾǇЭųƚĚJ¬ʠǫǌɁĴƇIÐŚ¾Ý&quot;],[&quot;@@ӐۑǅȯǄǀěǜǺĖÍ&quot;],[&quot;@@ƩĸƀŎPͼɫʈη¶Έ@Ͼ̽xǑŇý·˱&quot;]],&quot;encodeOffsets&quot;:[[[-74779,21702]],[[-74794,22968]],[[-75987,22747]],[[-75834,23269]],[[-76636,23444]],[[-77480,24013]],[[-76215,24646]],[[-79521,24832]],[[-77115,24781]],[[-79203,25615]],[[-79609,25301]],[[-78488,26100]],[[-80376,27371]],[[-79079,26526]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Bahamas&quot;,&quot;childNum&quot;:14}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@˼Xȗѫϸˇ˵ßɂ˓ʩğ{D©OS«^­To_ðƛSÃ¡M®ëNď¿Ù«§ǟœ_nǇäŕġå٥˲çÆÌ̓τࠉ֮Ṷ̌ͬȶªΎȬVɞƱȦǨ͚¼ݨǗ܌@ƤǍƞ[&quot;],&quot;encodeOffsets&quot;:[[19464,45947]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Bosnia and Herz.&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ŘñࣸįkŻº¹ÎŰÊ®fº@ät¶²ZĘQǈR͢ƭʀąKơãÇUoHyÂ±æïh¥@ůŕs­[¯PmƼóŚ~oÝőĢĪƉĖăȌíƎ¯sX}WÅãyÈeƞJǬ_ɀŅɈˇ»OÇaĝ˝ƭʕ^ƳĂɁI{Uo½ßw¶³øÑüÁ~jȏOȃpw¤mÊāJqǃNȑEŅ¯ȥGŕÿ÷µóåëĿ§ýzÃ»TÃj©ƵåʏǢۃăȳȶC¡uw§SßkıěLd£ðÉh֡~ƅĩSĂͥrubŅŜËRķMƯbࠥŸண±çýŹġůÕwKñÓ\\íHýĭQM¢ѮБȸجОαজØiƦMϨ}æwʬòŮIlpĶvƪWÆlÊºʂàwl¥{ÚǊ¿Ħïd¹BSjj¬êÄÚzNvSņŘǜĘxň`èÚĸ^ʺQ ØņÌ_jáZƻXrX|¦Ü¢ĊpÜFϬƎѲӒ̂&quot;],&quot;encodeOffsets&quot;:[[28824,57491]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Belarus&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ÝŝĔɜuĽ&quot;],[&quot;@@˵CÒྪzƀ˞KʄИȒv­ħȀOĿƽԭÌÿğݑӥد&quot;]],&quot;encodeOffsets&quot;:[[[-89961,17841]],[[-91027,16272]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Belize&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ŏgǎĞ½õ&quot;],&quot;encodeOffsets&quot;:[[-66283,33069]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Bermuda&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ĭއҀޕU฿̇ѥޗAх̽গǉȤࣟ¯ʑѽǉc¡ÈÓƨČĪçŤ͗Ĵѵ`ƕ_íTõäǗŠÛ|Hwyįė»̅đɻʙǡʽƕǽǷZí´Cˢʯ݀Uˌ̣ͰØɰɗƜ[˾ǖŰDÄgįĮEhļƊĦńMpkx̭ʐġŀUž¡ƀÅ̾«Ŝ¨Āǁî}nǕξ@B@UÒĽŠl¢ԔҸWƔǄŚ̽ǄǡѐȾͼǝɰ^ƘЪՂǟФĂڬʚ͆ݥನ̌G͌±ƜďɾĀ˜ˆä|ƀXĨiʲʘۺЬরǀĈι]ęçś³S·Ħ͕VōÇȅǢх͸ʹؚ̨͋˼ǝɼVʬ˟ծƋnçŴƑÐÁî±ǶBÄaĂ^ʌz¬RӐʥŒՇČ֛ŇIƳI¬ŴƥŚƋΟhȗXŗ൚¹DÖf¢r~AIǥĵƅO§fǭƛlŹ¢¡̜șðgÔj»RĉĲɵÚƥúûßÅŵϟµƳÆŉΏיɪȡuÕi»]ÕăÅ[&quot;],&quot;encodeOffsets&quot;:[[-59555,-20648]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Bolivia&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ËXȦņƦÑ̯&quot;],[&quot;@@åĦłĴș&quot;],[&quot;@@ǇMŲƘƉ&quot;],[&quot;@@ȗ}İĊĨË&quot;],[&quot;@@×§àĬFÓ&quot;],[&quot;@@ÚǼÊĥţĕ&quot;],[&quot;@@ĉćĮːcȇ&quot;],[&quot;@@ř¯ĘĄ§&quot;],[&quot;@@ėeɐ̮ŒξʖĞĀĿī̗ҳ΋&quot;],[&quot;@@јÆ؊őυࣽǣĽőĐ½ƽɭôçǛǻßɕòχëɅҢĨŸpŏtñƞŴՒͮƀԶĥ&quot;],[&quot;@@ɯǑģĐǐƨǄå&quot;],[&quot;@@͕f˜ƬŌçÑĩ&quot;],[&quot;@@ƯʓΟÈÈǂ҈&quot;],[&quot;@@cūƯ¾ɂҌ˧ÿĵ&quot;],[&quot;@@ĝiƂȈĺÿȵ&quot;],[&quot;@@ƁyǾŰ\\ǟ&quot;],[&quot;@@ŁĲǡÀ¿Nwʫ̃şݭĘ˝ŒõXŷOƅI½øŻŌʰ˕ΆƥN¶ƢHLżĢ`¢¶ʲÉªňĠfàǜH¤nȒȦGðnÒvQ°ÍÌgФtϴċ´^~PøLÀ²µÀ­âÁnPptzvĖdffHȐĩ̄¢¸VĈ¢ØORÄvJV¥§¦żQrçArYi¡èʬñ̦ȠܪťːˊɌպ֦݈Ęɀ˞ǽь࿫Ɍʯтƛ¸йͩ˝ϯԧѷʵוઁȻJλǃ׼ࢬհǤەʌɇͺƸɾā;ǎ˓ޥƮŸȸӴȂòʀ˼ȺŁĨŎıôfȾˮ΂ҶÌŜąjŞ࿄ؕṇ̌Ɇɂ̘ɣµÅņ®ĨʳǿǳĀĝȒǤ®ǓśÍƗőՋʈɔǬЊļmñ˅ɔȎВæÚłόõ׀˝̼ͬƛࡌĸєÇనܗΪн΢́˚ķńǗӬƹ࢔ƂķҸ๱Aߑэ੓ΡЅŃ`LƉљՕ̵ƿΑͭơ˭EŶˣ܇ˣЭ͏̿ʏ˾ƉƕôįÑȩǏǽ·ȉĎu¹ίĚ\\įԽƮ৫˓ૃ¤ѳйңŏ્ǽƛͧ۟ͥ˯Ƒ˧ýɣ гףʻɱɩ¿̭ޓiǑȰÍɡ֥ğÙʢ¢ǃĊ٫ŧŵĔÉً˛śǝяNݩχषڣºŏɯȻbĚǻÕƝɋØĻʔėɝȹöùȳŇ÷ǎީÇ݉ƭпЅʝЋЭҭࣁԹۧऱܙoʆ͐²΄ʢĢ̞ƴrǆɄǘwɺŔYdƼϯīɯˬŠˣĿ͗ÛÞŭαϹɹȅуÈʁѱࠃ׿ԕwJÅzË®@РhÀ|ô¸îêĄĚöì´ύɸƇ̄ƃĖʥĈ̶̯ϕǦ±ç͑ͺtqMo]ţģÅßU«B[ôhż΅͞Υ˺ʍÿŝ˳n³Ö¢ƆĚưɄʊƾࢤ਎ǠWƪԾ˴ɬˈцńШʪƜ۪ȇԶɛŪʏđƟ¦JŤŚǴĊžۆƬ¨ÀtfǕŪƻơ̈ƉĉoħgûZã\\£wð@Ö_Ę¹ºi áކŇƆMĐăĒţxǕ@±bűƠ«`˝ƹ঱ŸZʼĦڨíʶÁoǊm¦|¬[²kÖÆ\\ÖĄ¼^ÖjvƙŮďôΒך]ń©F¶ƴŶϠàÆùüÙƦıɶQĊ¼ÓiïhǷŴţæ¡¢kźƜeǮP¨ĶƆJǦ}B¡qÕeC൙ºWŘgȘΠřƌųƦ«ʼTċ֜őՈӏʦ«Qʋyā]ɹ`í²ÏÂųƒmèխƌȿǊ«ŖɹU˽Ǟؙ̧͌ͷʺǡц²̔ĥ͖T¸´èŜ^Ěćκযƿ۹ЫʱʗħjſWã{˛˅ɽÿƛĐ͋²ȝPĭGăEƑlķFė«ŻÃÏa©E¥R·éà¿}୞¶ƶÇs{]ͻ˹×ȉŗۻ]ǕвۣĊĴŪĶŪGńąĢŏƐĉÆ·ƦjŵĦƵЄXþ|¯^Õì©ti|jjp|KńǸ|vŘȖԸτĉ̲vÎ Ąƶʢþњ²zŐxú¶ŜĞĮĬĆΊȴܸżĞĶÈ´à^ǆQłd¾v«à¯Ģ^Ú¤LvLÆfɺ಄ɨఈȟּν̶b׾ӨŶˎÑƅ͢ґRHղචXãŀÀŢɐȧ҈̲ʀ΍ѥǦѼϥʌf͈ǖƄşŽêF̴ΖݲΠǒͶӜȌɌցúƥ࣮ϕΦĳɜǲŕ͒[ƞǓָ^К̍ŨΦʪŜɐ·˨ĊҔːɸfͰΐËǸx{TøhǊ¨nÖUĀ¸ČgŶſƃңϘƱ&quot;]],&quot;encodeOffsets&quot;:[[[-49649,-28433]],[[-49750,-27035]],[[-46346,-24462]],[[-45188,-23697]],[[-39837,-13796]],[[-39673,-13411]],[[-45567,-3010]],[[-45960,-1349]],[[-53076,-1468]],[[-50819,-234]],[[-51868,-134]],[[-50630,-115]],[[-50931,275]],[[-51636,143]],[[-51356,403]],[[-51506,1986]],[[-61132,4458]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Brazil&quot;,&quot;childNum&quot;:17}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ıjǜȂųÇÑ&quot;],&quot;encodeOffsets&quot;:[[-60921,13396]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Barbados&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@Ĩ@ŴҟƷãє&quot;],[&quot;@@ɽƳĀ˙ƽ̗ӷҰ̢ÌӒ̤Ĺ&quot;]],&quot;encodeOffsets&quot;:[[[117788,5018]],[[117788,5018]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Brunei&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ǝŰīĞGČhQ®í×«ÛyÉSLiÅL»q§gſCƝ§ŻJ½º{@ŝÝҟcͥĲşéýƯ}ƭmŻdoºɇÎƹě¤ƵĆĳǶlĸâTf´Ű҄Ԅ² ĮªĆ|ÊÌæêb̰É^w{Ĺh[ľSźPîMʲď´HŰĆ P]¼ɲĉSƍ&quot;],&quot;encodeOffsets&quot;:[[93832,28427]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Bhutan&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@_ƧגࠁȖԋࡔҿĒͅͰqSһ̂Ыࡘȱbȃǎ½àß¦ȡgĭÅÉĭęïՇǳͭΏֵέȿ֍ǽŽƓƽ¯ɡµĉĵͥޑʯÿݏ\\řĠȉNÙtщʺȫFɩƙɿ֥£ÝɇƛŁǇã±ȇ×§ąߣOĉĚŸ۞̧٦ϙ̶EᙶࡄIᵦሶˎ͌ϯզξʌ{͆Ț̌z&quot;],&quot;encodeOffsets&quot;:[[25865,-18220]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Botswana&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ڊअoЛŻȍÎʣԠųŨ̽ҾŻ̈ˡgɁĈŉ࣪ڕ­ƯǦ͗Պ̃ɒԩ˥úȿřટɀϭ́صvݷˣҫ¼ωӵ༩˞˧̰ΛɔʱγȣЋқ`ܱŕŨˁĻ֙ǀ݋Ƴţ֣ʇҽĵ՜޹ޘÃϪ˩ˊƗ֬®ӮƻƤʶȮϾުɰˊВaΞƨƖƶȪ˃ܪζޒ¾ҜԢȇƲÐĒୖǂβɺވݒô̔؈̮̔Ý&quot;],&quot;encodeOffsets&quot;:[[23409,11182]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Central African Rep.&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ˣ\\͠¤»¿&quot;],[&quot;@@œ­ĂƪĻ&quot;],[&quot;@@ĵÌƚR£Ý&quot;],[&quot;@@ƍWʈĸĹğ&quot;],[&quot;@@ͥyɰĶǰŦùȡ&quot;],[&quot;@@ȬǍɽ˒¢ɸǼɭWκ̖Ôī̤nǽۥ̍ԡcƓŤϢҎՂϲǨÜɡƋϻԡ˙&quot;],[&quot;@@ŊĀҪŝघAуǿKȍЫøń´ƉĎàüȡſΫÐįƘ̑xsƦɃͨΞÿʉɶʵ&quot;],[&quot;@@ŢqȡuìǈѺǲѥ̑&quot;],[&quot;@@ĉǔȪĉǥ&quot;],[&quot;@@ॴΠͰӮࢨҔ܈Ǥذɶࢢ޺ਞֆႺӲૼkԶˋʡɦųēɣއͷ֕Ƙٹƕ̂іųȰȫԘƪʢĹǫ̙ͿɣЦ§ȧ˺ӧՂÙì·ȋï̔ƍࡄį¥ýɤuѸȸƮǱʆŤħÌŏƯ×ΰÙቱկʡKǟ͝ƒďƁÇĊıTǹ৥ۇɋűȠȧfÉˤ˚Φɹŏ²Î൤ۨˀ˃ǎ؎ŮోSҸИƕ{ųŠūʷगΑȍĀêĎ΍ˑε{ɃĒȯHÇΰ̳ľIଘέɜכœħǸǉٝىʏګӋՓϳhǃʃᥫEA&quot;],[&quot;@@zùƓŚ¸&quot;],[&quot;@@țûÝâʺZ&quot;],[&quot;@@ĦéʯÇPĮƺ&quot;],[&quot;@@ʡĦZĴǂLĆȥ&quot;],[&quot;@@ਫŌோ֌̔°੮ȣ࢖Οĸŧė&quot;],[&quot;@@įˈȒǋġĻ&quot;],[&quot;@@෺˕նڋۮʱоաĚôâɓɗó˿Âৡ̀ɪɢƺĩǕҿã˵ƄƺĀʵÀbźӫImǌ΂è͟ ͇ȌǯÃœɒċïıĤͫˊΚjƮӻíʍȸάĮ؄ȃ&quot;],[&quot;@@Ŀůϓ¹Șʛ޳ࡵ÷ͥդтdƥֆՙ̧ɪ¨ǽǿײįĪŖĻέ܎ϔ°ǓЬĦ˴ĵƱӳ̓ʸpħĕɔ§΃ɗࣲȬĝțЉǍĳʥËȚIȍȓǈś̌͞ΖĬʭԍȌƌǺňȁϯݥǩÀɡáOю΋ʳƏ˘ҺŝˈǟĔʝϥ\\Ŧ͏ƋϫЕЇŋŲάŦרшӧGǫǏҩɖøRȐޓɇಿƔٽƇǡƔ¤ɒ߈Ѷ۱˚ǂÃąǆ©ˀФΎąĝøĴŸǯzmņǔƀȌ«œǰвڰɈĠĳìɚˀ̔˒րȤˮćrĜǪ&quot;],[&quot;@@ȋŸİèĜȟ&quot;],[&quot;@@ɓ¸̼Üħœ&quot;],[&quot;@@ÑʞǊôķ͑&quot;],[&quot;@@વʬǊŖײhͺϩ&quot;],[&quot;@@Ĵɯ˳ѢƫœĻ˦ƍ»ĥƪWßřߍՊlǺͷŚژ¸&quot;],[&quot;@@ΝƙȕÉЊŹõɵʔŤ˄Ͷƕäơ&quot;],[&quot;@@ſrðǂÐǳ&quot;],[&quot;@@֛̈́ÈòюǏǆǇÿÝ&quot;],[&quot;@@ůĩˍ¢Ɍǔǲŋ&quot;],[&quot;@@̒yŘṯ̌ʭ̈¬̌ϼĚʑۧ͝ĵͳĸ˔xΛƜȟˤ˒ͤ&quot;],[&quot;@@jŸŰcƙœ&quot;],[&quot;@@̤Ɍœǯȏ&quot;],[&quot;@@áäВƮͯɑ&quot;],[&quot;@@ȩ͋M˞ˁ˳ɧÉȄ˒ϋȣѼծß̟ɞΜ˰˫&quot;],[&quot;@@Ěř̽ŎɤL&quot;],[&quot;@@ûÓÆƒvý&quot;],[&quot;@@ǋã¦ƺŦĕ&quot;],[&quot;@@Íʝàĉłΰœ&quot;],[&quot;@@őØɾɮɦřΑǫ&quot;],[&quot;@@ŗWΪĐʑ÷&quot;],[&quot;@@ԋʆդZʟ&quot;],[&quot;@@Œū˳ƒǢe&quot;],[&quot;@@ɒƏȅЯγϗȊJʔ˪ʆ͎f&quot;],[&quot;@@̞oYıΡHÞŚ&quot;],[&quot;@@έ¤ϡɶٸŝĘƻ&quot;],[&quot;@@sȋҕ˝ϕǋֵ£Ǳʚ҆Ϛୂ¦&quot;],[&quot;@@̀ȣ·ĳӿʸֈ &quot;],[&quot;@@ֿǎȚĀИƭqğ&quot;],[&quot;@@ΘǔΖȫႆӗ̾γǯǑࢸØѶ˟سʧ૧ȶõȄ۱Ǽૡۭٓǃ́Ӧ୏īȂˈְȢĹήʦ߾Ѩ͔͈ƟÁȣːȽ&quot;],[&quot;@@Οƴ­ɒͤſêʅ&quot;],[&quot;@@аåĉëډŠʍ̠ԶƓ¼ƙ&quot;],[&quot;@@ʌMśşůŮ&quot;],[&quot;@@ǅNϤłɝŏ&quot;],[&quot;@@§ëǛĤĒȢŲə&quot;],[&quot;@@ߝŏȨ৴ÇòǧǷS&quot;],[&quot;@@ʟĎÉɜɐǤɾĹƣϓ&quot;],[&quot;@@ԈűĻ׵ӟƧএ̡κƮɘѼ˨ޜ&quot;],[&quot;@@ǇÒȆö}Ƈ&quot;],[&quot;@@ѕźϘD¾Ž&quot;],[&quot;@@ѥƪĦƌʮĒʣ&quot;],[&quot;@@ϱĄʜŦɾÓħƕ&quot;],[&quot;@@͇~ɖ̊ȁ&quot;],[&quot;@@ǛkŚƄĭ&quot;],[&quot;@@Ǣވ˲ϑλγė&quot;],[&quot;@@ŋƕƉİʖ¦&quot;],[&quot;@@͑ŊǈƔѨ×˝ȅ&quot;],[&quot;@@šƮˀĩƝÃ&quot;],[&quot;@@ÜǏʗÛǴñǩdɈ̦&quot;],[&quot;@@ʳÜˀÆKš&quot;],[&quot;@@UěڷĿێȜ&quot;],[&quot;@@ĹſгFÎĿۇư̶Ğ࠲S&quot;],[&quot;@@फ़ʣҤϑОÓ࣏॑̕Ô܉ʤ͏Ǜň̋ÍȫĆƠࡀǠùȨъĭƅ˺ΈÄ̎ǿ&quot;],[&quot;@@̖įٟîΊ&quot;],[&quot;@@­Gȟ{ͻǕΗʭ̯ȍՑԩٵ@ܥFɗMĿ˝įöœr­MƟõÆÓɏƇࣗ͏ٽıЕŧϻǵϷǵɁ@ϝʨɲӄ̘̾܌ªĆ̅ౚÇɜ̱ƞ֡ʤļƬūĺ̥ũΘˉGȋǭ̚ǍäӧȬࡩΔ҇ǲ҉ǴՓȰࣝʳૻŔȷÀ˿ŕԱȴ˽sÇ@ïƄ˯ŐΟ¼ĳWˣùŧæ٥ŖûĸùŜµɌNʧÆMͅȣBܑ@Ω@ܑ@੻@⿿@、@、@ᅍ@Χ@Ω@੻@ີ@ć@čąƓʂ̌Ŝͭ¯ö˰˽ʃлǦŐƨűȠĂʕ²¤΂ĵʷʟēсȼɱͰǔϢǗ̝ΕaÁŶďƵϟ̓øҚİԡsŞƄŭzJǈĩšΧ¡յʄʐϨؒĄիHˣȕƳǐ°Ѥ̜ƒǐѺ˫ЕͬȰʚÉúǃ؍̧ʻсɋ̶ːƆĈȒ˧ƵȀҢʽíƇˆұȐùƔˈƞ§ų̃śΈEǢţɻǪϽÒõǊȜĤΫaʣΡʱƕ٫ЈʖΆΖĆϩ£̃Ȭܴ࢔ȟĈɅхݦëƄ˅\\ÁĞƟەʘ̑ǞȧÄĆɳł¸Æ¢®ÍÞšŌěþϛϘɯɲɫɾ֟̆ģøÁÎʅǆɡöěʒˇƒ˭]ԳĽĿǁiĥʵȟCˁğŵ«ƉíçZÓʼ؋͔ҧˮˇŚ¢ö¶Ĝ@ÂŽGχUʟũЕĮÕåȥȩ@Ӭ@݄@௰@݄@௰@݄@௰@݂@݄໒ŕྞҧग़çܨǕ֯ʒ̨¬˭îȀǘͲEŶƈֺT¢ǢѼƥʛɉࡖƴȼǐј|íâ˚ࡸǞЄȄ؄ɨĐxǏহ̃गį݉ˡԍ̣ɾćǕöْZšȚ޲̒϶Ñɘøþȭܒі਀ȸɑƓĔċǜ¨চђУƄưžٞɷࠎف؎ǋ̒ÜƹǖӶ̨ȇμľŰ͑ʂÝǵ˙ںrцΞߦLजŽ۔ɽណϻঘÛƹŘڪےǏր̅ōō֙F̥řʳȕʨëᕊŗ౜ĞޔǞόɓӾƼɥȨƨՀ˻EƉчEਤ׋ϛ˺]ȴӌđک߀ƈǾାƐ֤͢שÛųƅࡕuĩƁӵgͩŦ;˂ᅰʸДùʸΑ،ƷƔƕ࡚ªॺ͇٠ૼŪઘĥђæȁɠপϥȼȨҁļϡ¯ϩφζΤÎŋŘўwθȭҠ²ʕɭلǰͯةȒȧΞµō̦{EţࡇՔιȽː՘ZŢˀͣЎǆʄ׺¦ઞҢ͹͎ǳǹ҇fѢːƝǆՔĔŇǇǺɊاşǎǁÓॣȎӯ΂ɈʨΚOŨ̹©ʓƖĒβ͔ƤмÝƂžϹæग़ΈΪǽҾmڢЗ·஖ٍ֣´Ǉŋ҈Åމ̵ӜJʹţ׮ĪȧĳࡲÍЏǃ́fِͻāͿ̴ǽަ࠼ࢴ˹ΆӍáąϡ˳ߢٯڤʰޘ৾ٴÖȩÒȶȖѳƄĵԨ᝜ŻȔ÷̩ęώíêƉ܌¿ӣʫӜČǉՏǗՙWˤʩǮ¤˧ִ̩ơΫ࿃ו्Ԑʵ²ɣĹ͂xўɃ̖ϿΥà˭ëࠍ̢कpƋؐȯళٻѣT๻ӲşÉಋâ͖ı¶øࢺśߚε࿒ųࣟ࡝ױǅ͏ĸÎũПÀǏŲȗƼƹʿn\\ʏցğছȰ̙ଝ̠ŘɿʒqĝĜਆɍʷŗԼŤܺɉɬ͇ؿɓދ`ΦȑԫǷǑȨƳ֫ǒʦűΫʁȻRɨƥԍʇԅ݃ɃęwਗƙǗ֞̑ΙǬτߎUظ୿ུ̫ͭˮ࿘Ϳܾ͑ӾϑྡྷЗ˺ǇŭɧʰǦॴ|౤ȹƤɉǣӋʄΩųڋ׊ԇȓǫ̤g݆ҋŪɻ΃ɛ̼ƶ̾qٌѩ͝ΤͲϊʢƑŚəƠʠɁɸ҆Фʝ̙ͨࡂĖ̄ȷĆĂÐӅф࿀Զঞބà׊ʅ٠̤̅ଝ֎يזʞ̈́ćŕĚǐ˲ʝÈŐ¶ȓʀƬĬʋĈǜƚӻT֖ئэɶĥϚٖʒಲɍxŗϖŐ׬Ǒ[Ą߈ɘࡤ̉íʅɢèɼùƾŵƩý̎ĐȒÓǹƩδɿ०÷ʊǱЪƸĊǋ̕΁ð̩࠙¥ޞěªӝ˴ƿηĭ£ŕŔ̷Ǐ̬ÑѦǐӖjˈƉŸɑŅˑַɕՄŰͤθŐǃƧſʶɠàΏĞȈ܈ɸ̠ʨ̢̡͞˔Ǡ˴ˇźʎĐÁžξç̳ŶsȦ;KťŘ̖΢ˊ¿äą̉ƅРª¶˓ƜæʲʻǏōƜēȤ²ľřұş؈\\ǙȚVƪǥ֍˽˞ŚԬNǽɯϗƻٴŜƲƳ̆»SʥѷĻӘË±ơզȥˡुĶٔɳǝđў¿ʍŉ̊]Âƙů©̢Ň̄ÚƴǷȄ¶ÉœǼƙΥΝܞȾÎĥɂiͱ̥Ӡ͖ɘ¥Ǿʽ͎ÃμĐҶʅʛǣءƃǕƭৃǷ˓ȧȿ¶ʜƕȕȃඬײ׺Ĩ͍płĨٴÅʀ̷͛ƯǊţЬɪ͂tоʙƘɑIӍѫĉӠÏ}ġȟ~ˈɋ੿ֱಅƋୁࠓ໵ǳǍňڝÌṽ÷Ϗǽαթއŵୣ࠻૿Ɏॸʃú×ȁ̝ׯԋҿ˿ԣğएБзЅһȣɷ|˺ƻ؟˻&quot;],[&quot;@@ʻºȘǊäɃ&quot;],[&quot;@@ߎ¸ʈʢҐఞɭԿ̛Ȃ±ం̤ϣ̆ոq੆εӊ۝̀ćюɦ޳੊ǬǘಠŹࣈ΁ࡼৱŇљ޲εюĹzŪ଼̓ĪţѨq¼αуƜƏŵ҅ŮΏŅqƕ܁þΔƟÑɣ֤ɬʹWǄυࢍǙඩ¤҅¢ðƊਿĨ͛ȶٿοޥÉछɑᵽƳЩ̀Ý̚ྣôݩŢֵՊᔔɐ࿢ñࡌìᄿ͎ምĕഅ֩ɒIŬ៺ϬᕏďʑÚОǊ۹UͻĬȆؚɸɣƐ̈ǦᰶتδÙžȏЃБ&quot;],[&quot;@@൏ҼʶǺઞÒؘǃɡ֕͡&quot;],[&quot;@@ੂVࣤƓࡰտ൹®ఝŝсÎ̥ͰӿĠÓ͘ાÇ&quot;],[&quot;@@ߐŢҤAɬĻľԒ՝ÈӓʐӸȸࢎǁҷɜȀÌ׽ʷʨ͚ȚࡌƁ৕ʺࢎ̎ՔªƆຆżҒăैܩߝϩ԰ŜˁҗزʨʢȋžɸĪۦƥOȕ΢ƋɷȄƎɀসơ߽ʖؘɊႤŹո̃ܵёࡨ͐׌ķęŗݛŏшʝϧђΰ֤ļ̯͑ТƸ҂ʯćɊ͂Š੖ƋΌƫɟȝϋU׍ɛݞǺ̺ÑҜŒź³õɓे̣ԪÎŹ̻ϘϠࡾɞ௢ȡŎŇ෍ρ੾Ɗȗȋɞֺ͂אʁŤʭڣਗɏئÆ੶įѪůRť෗ÂՑőՀØӪę§ʁ஻ÖञŻɬƭ৒ÇʑōĠɓǎÂÈāƨΚÐșϓтȦàů̘Ğʗ]ǢвŸĉȳ͐¬ڎɱƃǿׇFܨïȶĨҨţ։΋تńӪɌŠ٪̛ƥŋԃîҬɩ͕ÁԅĈhƯҖǇՏgȰƵɵǋѓdʑǐŧȗ¡˂u͗ȱʩةȴÜȔʇʅ܅ծߦҬҷȩۑåƚǪ΁Óޡж÷ďȗèɓփƂךεƕĕБՍʆʏ¥Ҁķ~ǩːąÏǫ̰àϞǟǿÿ՜ѿÀƼΞɹɴƐ֐ɉɉŃϤÉśő̯SΊɟЮ@ĵĥ͚ǫɇϯѷѦļсͬ˹ЫV®ʳफИIĭƻȫȨǏ৏֐ƞʽ٫ʬΕk٨ѿϸá»ë๎ڧť˅ᎋ̦ӷƚЀՋIӅŮʯüƈĲ͵¯թ̎ԤƐޅŮĮƒ˗ÍߥӚƸƸ՝IŻŹÅƸ˥ȁƼȧÅȌɥࡩx©ōࣵŻݻĺʇŞ¥τؠɐɌ఼ȍ͕̈́ĂƖχʐՎ[ࡺȂӲeܫֶ୐ҼȶʬӌȊࣃऒ҉LA˖ʝ^ņŷɽMԻɢƪȦ༳̅zʼԔlʲƴۉɎȚǌё÷̇ÀȚŞ؛ÐƵͦёSڃ̀˵ǟҖƅwɝԿ÷ᅗĶؘ̌եǲؓėܙƠ׫ೕŲ̇ÙҕĞÙːேǿߍȼ֡ӊഢįפÈᖑϜ³ߘঀ࠮ࠢː๨ńࡈŇࢭ΃տӵςۙ৐ҝೇ˻&quot;],[&quot;@@܀ǵదƀрÁƚƃԽƏ̒ī९ϑڈòѐͳҊêŬƃ̗ȕǀЩ߿ǡԉšǄľΉϵśһîଷ٠ԩƐџCࠟϘъ˂޲̙ڎªöǢɤÏ΃ʔײ`ғŪѯëՑǲҠĨϢųχ˼ࠈHUŴ&quot;],[&quot;@@ס³ϋêขǶӓȫ&quot;],[&quot;@@ߔǁഄiȸŃร࣑ჿHφõǺȹЛͣࠃ_ӿܸھ޼νǾƊƈຬĴ&quot;],[&quot;@@ѾîôƵӖȖࡼY၊ԧÂƯᱝىҩ͍֕÷σקܑĭɷ²ଃ̍ދӪએʞңLႢຐݯӤᧈǔ࿈ʿơĵ&quot;],[&quot;@@ͧ_ˬĮ¼č&quot;],[&quot;@@ҙÞ˺°Ǡō&quot;],[&quot;@@٣ĤҔʂנȱЏų&quot;],[&quot;@@}̟߱ჃͪըΌࣜƾࠂǩ̮ͧ&quot;],[&quot;@@۱ŋÉŌԬŨʐŧ&quot;],[&quot;@@̽ƴ̨ÆVȹ&quot;],[&quot;@@ЧµӟĄ๘к׏҇&quot;],[&quot;@@ӛéՊʬ­ȁ&quot;],[&quot;@@ȀÛӑƅء_ɰżߋ^ƺĔωVĝŔ഼ŀтʕ&quot;],[&quot;@@ࠆőɓđ࢟Yȑɮіºªé&quot;],[&quot;@@ǃץМóÒɅˇôȍùǢʏ̷ÖÙƗᄩsȽƲ˴¸Ӈƈ౤ʖ᭣ƹǭðոɴঠÝχ¢ϩȦ̀ŒӛĪׄĀದсȹǌӒzܻĆξÎ܏ǲࡠĞޤƕưȔࡔȑ&quot;],[&quot;@@͗t଀ňߧŻ&quot;],[&quot;@@ӎ½ʡǅڰðʬǱȤ̂࢜ßĨˁӕҗࢽƋ૑h̙Ĳᶿկॷաɚఐɔ঒ӠȦᔱƿšǆ͖ƂңdŷǍ̃ÀǁӋģͥŜ˅ūعǠࣵ¾ʶȐল޺Ƽઃýاº̤ńຼľඡ¾ϤȦலmࢗĈۖȒڰ̶ȵूI൪չᄘMDƂާȘ͒Ǻ۟ȌৼϊՌ×Ʀֱ&quot;],[&quot;@@ۣȒΜĒφą}ȝ&quot;],[&quot;@@ੱ¨ߌĎ˦ŵ&quot;],[&quot;@@ࣆţʯ˓ҐƢෆ¼ٚƻܻᅌŻĹĥ၁ᅊΥ̱ȗؖģɬǤόūІÂǆùʂŐલȇkŒ႔ʒאË࣪æ໨ǝۀ̳ܻȍ࠘įҗë͹Îîˋඩģڝ´ډ̺SˇݥÝՕĊÓ÷ʷḙ̂ďᔫIģ˴ࡱɵ࠳¶˝ǤɇƗΑL۷ԜǢӪݿѐᆵ÷ٟȈ͜ĈਕżД¸̙ƦކĀಮŹ&quot;],[&quot;@@ٹȍѨǕωʲǅࢫƯȟȿّľĦͲމʕʏ͛пǞ°ˡ͗śзσ̜̫Ǘ્¹ǰʻw͒ȀߪĎᐄܐሺǑłѺè߮ƹ&quot;],[&quot;@@ͧ±ٟİs˄রŷLȉ&quot;],[&quot;@@ցۏҶϖG࢜ͯ_Ǐ&quot;],[&quot;@@ᆸ«ȯɯᏋdǩǼ׮ü&quot;],[&quot;@@ַÏŸ੊§ǆāׇ&quot;],[&quot;@@ϣ׉ǎղƌм˕&quot;],[&quot;@@۰y਱ȫ״ÑȧᆣƉڕƔ§̾ᙎǘ&quot;],[&quot;@@˦˭ඹÐ̇ģԩúࣻḚ́ƚနɤࢾë&quot;],[&quot;@@ઐšΏƑͪűႱɧ֗ʆ״¾कƤʃϖߚRবɁ&quot;],[&quot;@@܎νܺǘӚɷ׌fۚȣό؏झqڣ̤ಃ°Ľĺ৹ġۇüūǚ૶YϙĄղĐہǪرƳŰȀڏLlǮńæ࿰O&quot;],[&quot;@@ŹɍथƤHǐݴ̤ť&quot;],[&quot;@@ਰґஂé͈˿ւ¯˙ʴ܌ȹɱߐǡˋˁߪ°ˤſ̠ŐԘ˝ྑʹևʣΡˎ¶ϫّ¢åͯ৷Ξјϓ٫ƘˉƫรƎйŮࠚèୱÆ̱ŤЌtߣźೊ̔਺ø౫ÞणƅƩĤ࠱ĥҹȦ੖Ǭ૳Ù܋ɌƷȂᅄó͒Ŭॣ¹ࠩư܂ª̔ͅှƉೱɼ҆ǰ෎¨޷Ș়`ॲǳ&quot;],[&quot;@@ᣈ÷႟ɯᦜŪˆĒЖĻܨ̧ͨ٬Ð࣪ßȉɏᛏχᇃŁჁ˕ᾆǘ♩टঋƀϔʱຓġద}ۍ˥ࢣÉ࿧ưޠıĢɃᅡ÷୩ĈઞɭऺSƇǍ῅טŏൂÄ๨ɋ͡ǥ಍ਈƷ֟ˉᅫÃÃΩՍƩ༩w࣯ǰ̜Ƴً¡ʨýቒOѦʫ׆îʲȇʩƹᑝͭƥʠرrڿȔʠɍ൷[˵Ȉ§ˋܭ«િɾȏǩ֣ÒŕŚOǗݯhċ̰¥̏ۗ¬ŉ̒ऐɸ೰æܳɂ˯̊੘âখͷ܌čࡤ®ࡖκĬŤহϫ౓vɏ̲޴ɦͤgֿÂņʎڭΗՍyʢɘ࠱ǻ՛¦شԈະŜผţ౪ǦׁÓဇþzĺڶÅᜁږßΎᙲ{ႊҗ৲ã̐ÂݕpဏՊㄾҖ༓ò໦ДℹٳགྷÝ֌ǎᇏȵ໩̑Ĉ߶ɖጎȊᐯħಣ̫֣L঍ɠᗄĂಊɂያǥጉ¡˗ŞتàϷàნǔݍ྿ƅԂȖఃÃ̗ĨᳮΌ࢜ř͢þ೨Ë೑Ȣ฀Țቜ̹ĆƜᣒͫ᠛Қ٢ľλĠੈ³ŭǨቘċ୿Ȝᒌ_ഞ̣όØಷͲᗮJ์ʕڃƸՊƪۢh࢘ǗŧƲपКĉ&quot;]],&quot;encodeOffsets&quot;:[[[-61222,44995]],[[-68364,45755]],[[-62424,46582]],[[-75463,46680]],[[-75332,46561]],[[-62571,47048]],[[-65342,47584]],[[-63400,48420]],[[-55528,48580]],[[-76501,46084]],[[-129118,50539]],[[-55863,50779]],[[-55391,50939]],[[-129680,50797]],[[-63284,50273]],[[-128188,51300]],[[-130250,51856]],[[-56789,52774]],[[-130994,52710]],[[-81289,53199]],[[-131449,53659]],[[-82669,54014]],[[-134915,54473]],[[-131637,54211]],[[-132267,54393]],[[-132964,54444]],[[-133361,55254]],[[-135839,55427]],[[-134069,55787]],[[-133709,56085]],[[-81897,57557]],[[-80830,57617]],[[-63225,58936]],[[-81629,58896]],[[-70819,60458]],[[-65952,61816]],[[-69871,61687]],[[-80416,62187]],[[-66388,62839]],[[-66591,63365]],[[-81454,63910]],[[-66379,64061]],[[-72025,64050]],[[-83968,64466]],[[-79745,64994]],[[-78517,64916]],[[-86957,66828]],[[-86706,67149]],[[-85735,67376]],[[-110686,68614]],[[-64185,68666]],[[-110489,69020]],[[-75388,69411]],[[-88673,69362]],[[-77492,69963]],[[-80878,69830]],[[-107049,70048]],[[-76678,69990]],[[-104290,70233]],[[-102622,70459]],[[-102394,70670]],[[-81111,70498]],[[-92364,71086]],[[-78843,70804]],[[-103599,71063]],[[-97805,71244]],[[-69544,71210]],[[-79901,71389]],[[-81337,71463]],[[-99778,71315]],[[-88998,71796]],[[-76501,46084]],[[-99105,74688]],[[-117270,74336]],[[-107815,74670]],[[-81446,75423]],[[-88667,72716]],[[-102401,75721]],[[-100628,75642]],[[-95406,75941]],[[-122609,75892]],[[-99692,76315]],[[-97594,76294]],[[-106618,76838]],[[-95787,76829]],[[-98384,77323]],[[-96795,77568]],[[-121168,77394]],[[-80960,77749]],[[-104680,77840]],[[-106519,78422]],[[-100045,78302]],[[-103655,78418]],[[-110891,77883]],[[-91879,78344]],[[-116286,78586]],[[-96558,78759]],[[-118324,79220]],[[-91989,79123]],[[-107067,78994]],[[-97776,79660]],[[-104134,79562]],[[-116564,79621]],[[-113109,79978]],[[-112451,80539]],[[-98513,80417]],[[-105908,81220]],[[-101162,81901]],[[-94090,83081]],[[-71156,85010]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Canada&quot;,&quot;childNum&quot;:110}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ÅÑ@ĝ«ÏƜBAҬǥǺŒÆiÅCŉOÏĩȟÐ·K¥]u­mÁNwzµfĿ¡STďľ¯Ląků§¹B§TďƨyAā^čɵíǡťǕȍǦÎ®̡ƚóǘÓÇ¿ųíõȫ֑ēǕÕplÉü³ĿĪ[ɀƯlűMěñ½ŝħãIRAÂÆp¼ʌɾǂhÞxĮƘ²nlŐĘŌĔvnj@bč°ÌºƘǨ³ɮƆ۴HĘxX^G\\]NčMVStŘߜɃĐ³ćǑ@A&quot;],&quot;encodeOffsets&quot;:[[9757,48405]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Switzerland&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ɫªƎŞĞǇ&quot;],[&quot;@@ɓśŽĬәșȬࢲFƔƧ&quot;],[&quot;@@ڪĉό¸ŽǑˤċȠ͙ۋǊoǬʫÎƓŅƬƥȗӋʠĄɞƴ&quot;],[&quot;@@ƾċ͚¸ĶǣƫÁ߱ʎϐl&quot;],[&quot;@@̲áķɗˣŤЍÏɗɈǶƌԚŭ&quot;],[&quot;@@ąʹSɶǿǟǑϱĻĚɘɳƑŉXēɎѿƸͰŖѰÓ&quot;],[&quot;@@ؚŭѦʅγ ʥǮ͹`ω˪˞ƣ&quot;],[&quot;@@mᇛ۩IȥŬٱą૫ƶąĈņĂ؄SʂĮĆƃ͞ҩΘIȐ˰ɎŸ̟ȿeĀŋ̮ȱάÖШɁǬŴߋʢƍȄºƔآʲɿè׉ħʖˀŤȿǆϐËѬˮȸƳ͆úƆÛ&quot;],[&quot;@@ʊ˭ƃˁƁPɅМʂƄ&quot;],[&quot;@@½ĳΩCȯȑŖ̆ΖÒƬÍ&quot;],[&quot;@@ğë_ʄʾ{ƽƛ&quot;],[&quot;@@ͥĺ˦Ϛćƭƽ&quot;],[&quot;@@ʃ˕ɁźĨăȊАn&quot;],[&quot;@@ıܝƙIįʈƀʪȣĝėˍН¼ȲʢƉŔ͌öĽĺɖǀ®Ȓ̌Ð͋&quot;],[&quot;@@şƪâЬƲÜȜԑ̏ş&quot;],[&quot;@@̙ʏР\\ƖʬŖˢم&quot;],[&quot;@@űÖˮƻĩ&quot;],[&quot;@@ŷÅȋĂ͈ЬCѧ&quot;],[&quot;@@ƽƜĂĜüɷ&quot;],[&quot;@@ȯãƙð¡ŐȦʴβƣǫɫ&quot;],[&quot;@@ɣǑɲԕʍűԏהĮƦͼìĒȾʔőķ&quot;],[&quot;@@ŧāƿ¦˨&quot;],[&quot;@@˻Wɭł̎ாђčĖʟ¡ɯˋĳ̔̏ˁȅoƿ&quot;],[&quot;@@ƻ_ĦðÖÏ&quot;],[&quot;@@ŻĒĢÑ&quot;],[&quot;@@ƾƯ̇ࢁݧ̝ʽ̗Ƭ́ǩ˟Ƭ؝Ʃˇɮхɯƕɇ[˟٩ЛЩƝ׃ǗȃÊىĬąĥƵǑEſ֋ǯŁÅΝ˦͙ğŁ˼ڧ¿ˉɞç߅ǙÛ˹܅ƋċŞɵVҏճϱŗˍrޙʸ۽җˣř֕Ʊ¼͕ƃŽĠǣȉʻjߩƊ̛ͫǣاͪȹŻġȌӧŝϡԜµ¬ĳďǟګQnōϐÙȺ̑ͭȹĬ̿ȳǧƨЭȫƯ̵χʓƟ͑ǄȝuɋȑğḘ̈͏ơďʉ˛[ýų¬։̊ԧդŌƜ×ÉܝЪϗ࿪eౢ̉ڟŶ͉ɑথʯǙࡓʩĕ݃ɂȧʂЄĮ¦ʑĎ¨ɄϞǘ¾ȈƉ ݝ̱ɫ˟хǼ˘Кɲ©˰ƐԚ׷ìǱĕɱø·ҍѭȤͼŊİȂĵŕ˻¿έ Ɂ҆βŇŴƀΤãϸǪȌȿęƹżňďʸŔƶɫǈ΁Ĵӌ̃ޗȭȟȶύĬɢÀS̐ܿǠɻ͎΄h÷ǈŎĠɺŃȐˣ˪ĵŶϐ˕˫ǩ˺Ȣq֭ˈʞȂ̀i̫ǰưϢKɏƲƆ΄ʉЕũČtڲ˨ĶϷVġϸৌūǿŸę˴ȋɯʉΫɢĸŔʔģĞö̉ƈ˘ȼŽͦşlµıгŨnȔҳƽĢȡɵȔڂҞţʈކĜɪƒüŐǏԟ̻ƉΨÂöʴŦvɑȫϱĔɆ֖śΚϸŒ˨ęѕǸèɔԾȴ¸ŞbƄԏɤɪžÔȘáʶˊʆ÷̶ØƐŢGşɄŢ¶Ȁǁñ΂˗ÔϴɔŴȋǉ·ƨʏɟ͏NġĤƊƿÄŽͰʜॾɖƤƺӆʙ׸²ЀǓ˼A̜¼Ÿ͖nĊДѾޮƤͲЪȆ޲˴њßҶʒμɋႀʢɨǀìвǟ؊ǲɈȄܞƈȎɼ੒ÇҞɤԤŅѺƴ࣠Ǜʼ~ǖȚǪɄరįՎࡨɕଢаŜľǺ¥ʌƖ®ĊÞÚÈǖν~mǂí§ÿ¬śÆ̽¢ſVŽĢĿȦǟÖ²lwPoħŃĻƉFgİĭhCÃǕů\\˽ɘƛ×ɯ̤ͯVˋʰܿDˡʦÍǾƖ&quot;]],&quot;encodeOffsets&quot;:[[[-68903,-57115]],[[-68689,-56477]],[[-71375,-56237]],[[-72695,-56184]],[[-73103,-55329]],[[-74673,-54765]],[[-76170,-54192]],[[-70277,-53916]],[[-76618,-52869]],[[-76348,-52507]],[[-77109,-51896]],[[-76856,-51503]],[[-76909,-50008]],[[-76263,-50327]],[[-77322,-49933]],[[-76356,-49758]],[[-76914,-48985]],[[-76096,-46788]],[[-75399,-45897]],[[-74737,-45854]],[[-75504,-45460]],[[-75582,-44879]],[[-75543,-44386]],[[-80695,-34453]],[[-111902,-27791]],[[-68807,-23369]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Chile&quot;,&quot;childNum&quot;:26}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ŀ˯̻̩ǃҙ͓ʥҡȕۉˊ٦ԤϨċNðĪބƠΖßÂƌȦū&quot;],[&quot;@@ŘScĭȉĖü&quot;],[&quot;@@ĳaļòGÏ&quot;],[&quot;@@QƜægÓų&quot;],[&quot;@@ý§\\Ěâ±&quot;],[&quot;@@ĵolǦĮ¡cœ&quot;],[&quot;@@ĵoØŢı&quot;],[&quot;@@ɭ¦¯ŊˆÙXĕ&quot;],[&quot;@@˽´ʷɌնʿ&quot;],[&quot;@@ɽǬKŮ˽ĚǙҧ͑̿݅͟§ȴ͉şȁ߿ŦȍȦǱهۏऋϏѷϣɋƍϣڻɽܝҡʯ¥wśУŏ³ǂӖǂ«ĤǈƔҗAQƆɀĂ@ǦʆĘЊӺυζėŅү°׏֛ࣳГΏӏ֯īɍƈƥȽ˳·ȑǬˁȼŇަşŲ˻ŗ̳ˮǋЈbҪϾ¯´аżݠ̻ΖÌԢŁȃ˭Öķƭĩ΃ń݇̇ȱjîǁƹ}ÕʃȵÛÅƤŧsõëǆőܗַɛϝčࣈЋԔ੏c̕ШȣÀǿϞ͝VħƻRˡŬ͇VϟȤПƛְ¢ÔƏܼпǾͷϭŅԅι̹ɉūʦ¾ŜƛՀƞΜ˙ͼĝӛ͕κĸoЃǙĸȗÁǊȫśiĺåƿǭŔ̉˳ÏŁĖƿʑǯuîĳȵʻjƗˡ˅ǉΧǡ»·ȢħįĹ²ʘϙΗɻ˗ÈǊơʌ°á΋êǙω¸ĘǽʷmËɽɫÿhǵӍLåũƏOǶȓΫ΅ƋHĉɃÝłǩŕƟÌ¥ǍșĉÎÛƇĉËȝǿͱƯǱªšőʫĈ˻ǙǝŜćȏʍXɁyͩ̌BɠčsǃǅȈˉG̳ͳų»ŐœʥũȅƗȏǜ¯ȣ̣Ğ˹ʓӯ¡ϙʟſľɍͥǲě«ƓǖŹƕȉϱÎðìʱЀfǸɀ̌ȳķƔkŹͩĥƒˣƭɪħHnɫƫ¼ßŕɱ¥ǳŬ΃͉ˆʵ°ħѮȖɸȧŊə§ŋĦʯ¡Ӊ΢Ήǫƫ˃˅ıȓĆǛɓˑȮŅǋƓƴ́˓ѕʬÃƛȭ»©£ʇRçĒkJQqs³uß©©mǲΩN£HƟqʓÞđaO±¡oMƋìɕ¥\\ovY®RÄÆlĪµ¹ǀЋʃϧRǧɸoɨ؋Ĉ˄۬õĠүĺθŽɾƄǼԻUխǙŦˌƩɚªʄżĂè͎ǆŐɺǆ`˔ɸûǬĸĮ®ԆóڌǕìŻęȣՖϳ˦½MęſÙċgŉėʛȅë»٫˼ϧÜԽ̳࢓ƇϫɝʱҍӁ¢׍rKºÄMlVzÊ¬ÜØ¯îRćgğHůĪǠTƎɻĎ÷°Oůą³GʱĐíNŹOĽTg\\|ĺ]xŃįrĻRéaåÉËą{ĭ©±ӷس· ÉÊaüæȶhĐŜȏðŵçŵői_B¿Ƚ`ȧÑ˧Nűbķøïûûn¤yrÛP»cĹĝãġÀåþ·]ůÍqd¾åŪåîå¶ɣCǕb÷p´ĤôAjVµNǵ³·NӉ̐­ŀ¡ĶuÂáïv̑ăΫή޹Ϝƫɚǁǳrȋ¥Ƌȳß­Ǉǔĥ®ֵɺbĬʃǤɓÜɵĊɿ˶̧áXȐ½ǆȲȗȚîƔy®̈b·ƒšɄŞqш¨Ķm®ƏĶëîå͆³ǢȲǸľÑҍǺƗ˺éǂ̂ȱ`̑gŷǡǯ¾ĥ¢bą¨ËWĪ£QĭœuÕA}fÝżƃÈ¾˪mÜeÂýņËĕ ÿdħZ¡Ū}~ʕÖėe¹_ǓêûB·]]R{vķäGjƾâĢ~¶pXIzÖq¨NȒźȋǺçܠ҅ǘɃĵȋÊėȺĠĪǕɖ|ƘIªǈìøPzĜ¤Gjzz¦°Ď¬Ä۶ʈ{Č°~VŜĚHŊvɾŮCĺˍǎE͘ņ¼áÞìºĈņîdäj¢ĬƐìâ`ԂŚĄŢIƖtȈǦbøäʦŤҨȈЈĮØĆÎhʴdfVXbŊMҜ˰ŜůƜͪĲα޼ń԰ԡƚǀļ൐˾Ɇǁ˒¸Ɍÿøʤʟƞ׸೺ࠤǹմDĴšטȞƠǆŋ֊ȊЂڦŦɒѪўĀQČȸªE¸ƋŇĳô÷ǒ±yãŷˤéĔËĔg¦ÇRćĚ¥ƀËâYŊñδvèqǼƫ®Eâj¢ÎQÚōôĺsdkĂųÒȁŬƹÔąìeÐ}ÑÚœ×Бÿ¤ÓJÍ˷ѕǺˡƢl҆ş۶ÉžDǬrؔù৒ӿ՚Õqȧǚïˬ֫ѴұېÎቚȅѠĠĒMζ­ӖÅͺYê]æo˂ʅƸ·ΘÅмï՜ɉʊʶ¤ǌ@ǿ̦]ĸ£ÌjÆ¢æØİҮȈݸʜ୶ƆѠոlĔdߨˌԜӊܸ˶®ŔѽҬиגŔdäeʤIôĈÿĠ˾ÕɄeǨ{âaÆdȌŐŸ ¨z˶ȚŠǀƮ|ƲȲXѦÌѢʀ´W¦_̌͸ʞĊЌup|AĎ\\`ĞDǎÏˤŰðXŸĄ[ƨWÌTØSĸÌĨsǢąƜqŤZŬmðDlĶ~ƼƽʖՉшÁřĵÍÄĻĸÍؗHΕ˯Å^ǹŞı~§bşbĝIśsœJ½`ïCſËåßăqɿǀûɌĪ²ŬÀVĈIĠ|ĺܦਸ৆ʻӠ˦ڸȈðǲƵńݺ৐ֶжÿЄӳÈvżݢкᔺɘৢ΋ɚÎӘƉ׊ֱӪ੗͐ͣ~̛Ɇş΁Ϙȝע̤ȍθ^הй̜AɑɄɕÑ˓Ȕʹ౞LȚȜξƄ˘Qۚɶ̺ĵċȗƾʵӭ΍ʱࢯΧգȿġÓ̩ƫč࣫ʠͽ˽Ϸŝɰ٭D׋ǁЏէƥĒǇ&quot;],[&quot;@@ƅǦüĻ&quot;],[&quot;@@ɂzDȵ˥ÎàŮ&quot;],[],[&quot;@@těřlĦð&quot;],[&quot;@@Ɨ׏ԛژƇδºцބ୊ҬȰ˰ʧѿຩ͝ҩ&quot;]],&quot;encodeOffsets&quot;:[[[113551,20472]],[[113035,21600]],[[115348,22160]],[[115498,22121]],[[121020,25085]],[[122697,26068]],[[124162,28761]],[[125232,30683]],[[124788,32249]],[[133660,43557]],[[116734,22744]],[[116752,23053]],[],[[121250,25111]],[[123913,23164]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;China&quot;,&quot;childNum&quot;:15}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ҒӁĆĊTĸÙÖCŶŖ͠ŖǬNʖÈZÀÄą®°òŷt¸×¨C¤lpT£gåʱ´iË¤ſĀӻÕoOwfY¯qķ÷ƛБɣףȔࢍǤģƗ»ɻ̑¦ŶŭȉٯưЧ×ӒKܥû͏Ôí¹ʲi܏ĳ്և{ȆÙƼՒ¯ʔƳÈÿXÑĴmÖîÿ¨ʱʧƠɜΰëЮkǆàWĶvøƞUĚĮǰúýXÛZżN¢ʄnŊUîû@oɤșŦZǌľÂkánȐȭäcВƐǄˢɞɶñ̲ǓÈǘɐNpmĶLÆT´nnƞăȜƂºˋC}£ùFcĺ¹èMńĦX¢ªŴŚNƤŁĶL&quot;],&quot;encodeOffsets&quot;:[[-5388,10568]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Côte d&#39;Ivoire&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ɯˉϽީʵȭƼƣ­ӭƘ֫˪ˉÄϩ޺ޗĶ՛ĽӿˉȨ۵Ĉ˗ƾઇÕĂඉǯEgōț@ʱ@ڻ@ġ|KIlsNlȢńҐɵϬĀðĽWïƾƸ°ċĦ¤úǣT·ťΥƚçϴɏİIŽĭ²ƨЌʂܸатʒ˼p®hƐĲĖÚrdjkô]ĶBǊƼ̊ʉàáÖȫ gìZƒêŲƎzǊàÀǢƒāžÖǨȴǼ׌ƞˀƮ|ÎŊŴrÌÎΖ®ļɨŚÒЈŨŔĸθƐɦǊɢöÒÜðHºh̜ȌºքčŮȷ¸óøķՎƲAǼ±͖ѧȠց©ؙĒϷŦʕ͈̋உwɡʍ̘Чڄիθ٧Íɛ&quot;],&quot;encodeOffsets&quot;:[[15852,7705]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Cameroon&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@͔ϵͼʛȢuʦƴмħȴȂǪsѤԕ˂ūàǯƞ@æőÌçŷ̯üǍį͡ϔƻÜȍહ਍Qˏǻͳşణ͉˧ÅЋɉǣdȡĶíǮ˩YٽǈԭBß˵CÁfëǚѡªŵZÓU«ėǃU¹vŭš¦ãĴȇöÙƎģŨĥĚĹĎƓĀɍ̂؝༓ʕyʥϿσǠϡܷɗࡡČȵӦҋΠÍnǆʌÔiઁȃǄ̑űƿ|ʅόƭöśˌ۵ʔΑծ˭͕ڡÚ֩ɢ»ΊމǣWʌͱɒÅģÉ̳͙ĳɗPɇrÙ}ýÕßJ«ÔmʖĔŜğմ͓Ӓþٴċବ¯pҽjɻFʫH¥m¾B¾ÀƾQ^ĝJʕǉ{ĹU̇ƁŕGǉĝƵC©{ɓǓǕ@͍ÆүƟ̫dÁQԁۼÅ˖ęƊÏżϢƇǖėÈĭዱRՍMƋPؙŧȩȰɬծ¨ÒnfȞȮĲĠ``^¤CɺȝȶĮ¶ɢȊ}ΖƼüųëŕȷʠ¥ંबȒآCܒ˚˴˶Ԫܼ֪ˎᓀΚފĴҮ_ܲЌҜδȤʲΜɓ˨̯༪˝ϊӶҬ»ݸˤضuϮ̂ઠȿɀŚ˦ù&quot;],&quot;encodeOffsets&quot;:[[28061,5232]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Dem. Rep. Congo&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ĳҭΙމˍᒿܻ֩˵ԩ˙˳Dܑȑءઁफʟ¦ȸìŖûŴΕƻȉ~µɡȵĭɹȞ£D]q`ÝÊ÷Ĝ`̅ƃНΕȫςխղĖȎɨƞƴƋǌb°̆ǿŢǎȇŬÊдϬÏ͐ê]ʹƄĒǠėǖ͋ЊçɦɎź˝ĚsǦŘŘȆ˞øૈԩ̶øҶ̾ɪĚɸȽЀˣ¢ՓƛҒĸ̼ઈ˘ƽ۶ćˊȧľԀʈҾŤ֤݌ƴ֚ƿ˂ļŖŧ&quot;],&quot;encodeOffsets&quot;:[[19057,3562]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Congo&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@՛ǏʑЁχ̣Ư˿ŗם̟ԃʶÆɘųŌЙɴ˹çٙɞŹǜ˳݆͢ĔԜŗמۣߤԨŐ̈́ğPȿ̍և}ٙǌե̎ϕҡԹȬ@΄͹ˬকǥѦɿΎ̱҇ɏȨ¿šäĿඟWGձҒQƆ͡ˍÒӧŵa׽ξ̵ȠֻɧఇɹಃeǛƼÕƘµ~ͩ՜़Ëfã¥°ɿŒÓZµÂǫľ­X·gñgéÉǙkƋĢǋÒ¥[Å½Ã»©ȟ×؇N£°Ƒ¾ϔʥŚƗώǕªÃÒ¹xÉÎŃÅx§Þéɪ¡À£¢½¼ÙÁs®i˱Ųū³Яǒг̌ȉǟݵƄÑȰȡǜГŌ֭ЦƓƘȞȎǺÙ]ӪƦń̌tɆǨئ৔ƽi]ƒãħ§ʬĥƘƼÈ˘ñԐƉǴʈȲȁͮĎͰҁպŜЂȊŏ˾΀ʁѶĔƈѮӋÓįŚ^͊ůɚզΒɀ͚̈́îɼŢЎƛ¿ɚϾԐоќħƻőĬćɐҲۤsࢎԀŞʦΞȚϞíŀʏƵƹ&quot;],&quot;encodeOffsets&quot;:[[-73031,12147]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Colombia&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@Ð½ǏtĆƂ»&quot;],[&quot;@@|ɳʇƼɌø&quot;],[&quot;@@ȧŲÔ̈́ĀÔЯ&quot;]],&quot;encodeOffsets&quot;:[[[44840,-12602]],[[45544,-12371]],[[44509,-12186]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Comoros&quot;,&quot;childNum&quot;:3}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ŏk±ŪƖlƍ&quot;],[&quot;@@yƾú±¿ŋ&quot;],[&quot;@@»ûǛ̰ʰˏ&quot;],[&quot;@@ȌÉcŁȽDǈ&quot;],[&quot;@@°§ǭxãęÙłʼH&quot;],[&quot;@@ý¢ŠƵ&quot;],[&quot;@@ǥ^Ƃø¤ĕ&quot;],[&quot;@@śU{žʬî°åǃů&quot;]],&quot;encodeOffsets&quot;:[[[-24891,15213]],[[-23738,15501]],[[-24006,15369]],[[-23467,16627]],[[-24665,17022]],[[-23437,17059]],[[-25484,17222]],[[-25773,17354]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Cape Verde&quot;,&quot;childNum&quot;:8}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ʜԑӌթǸýIecgµƁði_¹{}W]i@͛¸GĊÅZǃƧ¾ėVũaƓĭŰɡȳʂȢʵĲƮʧɃǅƚĶǄĻ̄܁Θő˦ѩ˾Aœ̎ʉǅǿȧǬʹüȍ͞ƶϞȫźƎƐƈń֦ȳɴĎ׸ʻǦ¨ÒŎ&quot;],&quot;encodeOffsets&quot;:[[-85649,11180]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Costa Rica&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ͭŋȋŸǰAğǘúŶɸ«Ÿˋ&quot;],[&quot;@@ȽŘʈđ&quot;],[&quot;@@ƋØĆĶƝ&quot;],[&quot;@@ӚKİďж¢ʈƅҜ³ҚЕӸࢤӍŞQïĎðc̔ȑȅĨŇźĘȚɑ२ȁńĭŅɽۼÁ̴ɡ̄û\\Ľ߳ɡĚśīܱĆಳœԤҬŁȤݗĲ̽ʖȥҎՉMܻʌɉɂҥ¥űǎċƃӃĔȓƤ̰ĠŅƨݱbաϹѫ«ŉȑЅƕBż͕ÕҼǾʮˆʎڎʨஜǐ&quot;]],&quot;encodeOffsets&quot;:[[[-84543,22090]],[[-79533,22479]],[[-79748,22659]],[[-83801,23719]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Cuba&quot;,&quot;childNum&quot;:4}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ȳèƍȨ΂ˏ&quot;],&quot;encodeOffsets&quot;:[[-70401,12350]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Curaçao&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ɚʡuÐ&quot;],[&quot;@@çSƎ°å&quot;]],&quot;encodeOffsets&quot;:[[[-83322,19814]],[[-81739,20186]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Cayman Is.&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ѹÃýƌϵÙǧìƖRÀǮ֔ߖʶԩ̳Àȑ&quot;],&quot;encodeOffsets&quot;:[[34821,35907]]},&quot;properties&quot;:{&quot;name&quot;:&quot;N. Cyprus&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@Ǩë϶ÚþƋѺÄÛ̍eׇͳҹƆōȌ_ňΊö&quot;],&quot;encodeOffsets&quot;:[[33498,36016]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Cyprus&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@òFòrVņ࡜ͷɲŚçǫųήˑ̎Ŕğǆ҈ơʌ¬ÙǅȺŧźÂ҆ſɪ̱֟ɇÙǉ˝ƩԻƵȯ΅ǔУࠫȲ́ͯաFȟƒ¤í¼řêęGnП̒ȡìʓ˚ĺŚ΍θ@m´ÁzrȴǀϼĈƒhী͜£ŜȎ^zGS·oÆcFrXb&quot;],&quot;encodeOffsets&quot;:[[15165,52080]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Czech Rep.&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ɭćȼ̶ǩ&quot;],[&quot;@@CďѣŬ̸˒řªƩ&quot;],[&quot;@@ʂŵŹǝܨſʀÂIǕǓęĚáМ§װȊϸʤϠ³ΚɧɶXŢʥͦĻƣĮɭCÉCcýÙáŻÿU¯ŀăɖŗĘį¥ć_ÑhÄyÔƗųȽŘǣyé^iƲ»~yx˷ñēŗIYWaqEÅdpT¸yH]ȍ¤śি͛ƑgϻćȳƿyqÂ±n@SQ@ǤōǾɑĹřʔ˙ȢëР̑mĚHŚéî»£WgIŁYʣK]SYM¥Ɲñ¿ě{ϣǏǌǻ±ƗƀÉKÙaÑc}Cõ~ÏulCv`bsí~Џ¤YQN¿cw॥ȏ½JñÔo~DhŋHépƧKTő©ƻñdîœ|A~Itur¿ō ùpȋ©ߛɄŗTsUĎN^MH[W[åWqa۳GBӄѦۈֹƮ׷R͡ʖŤ̄ʁİÇ¸y¼NðȌ˦̇ʤ°żǅŀɮİÌʬȿ̒ܐƒÛĨʾʦʋìź˔ƒՎĻǐǰǠ؊TČȉŘmôƊƌǱļИӲeӠʩЅʰ͡Ě[ʞɿþ˜Ĩɿξ࣎ß&quot;],[&quot;@@ŦɦÓŽɀOˑė&quot;]],&quot;encodeOffsets&quot;:[[[14539,55214]],[[14039,55688]],[[9974,56142]],[[8508,56102]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Germany&quot;,&quot;childNum&quot;:4}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@˕п̩æٓčKצӰپ~zv|OȌŏÂ¸Ŭ®dAĺĤȤ˻xɳثѿıX¾ÙϬüǠõ&quot;],&quot;encodeOffsets&quot;:[[44284,11776]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Djibouti&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ÿké΀ƴęIɹ&quot;],&quot;encodeOffsets&quot;:[[-62752,15615]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Dominica&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@͆ívŅʷ§ΟŨpƘʬ£&quot;],[&quot;@@α§žŲɴĉ&quot;],[&quot;@@ɉhsƎɾƵ&quot;],[&quot;@@ĥĎˢʰǻͽ&quot;],[&quot;@@͹äæǎ̰ŵĻ&quot;],[&quot;@@ŠЏ˽íϡĬŅ̐چĂ&quot;],[&quot;@@ĩ¢ľÈë&quot;],[&quot;@@̓ˋǖƯ˕ĉ̻ǁǩΐ̯dʵѢ̀ʰǢǊɑ ɪ̒Ŵ̠¯Sɻ&quot;],[&quot;@@ƭTʨ¼ĹÏ&quot;],[&quot;@@࣍à¯ўНƴࡎѐģǼȪƮ¸Ŋû¶ʼɗHȃʓʭ»ƹǀˮɒۄÂѼ΀ծƀ˝भզƫơǛι{ŕ̇ɻkĶçεɣäȑǽȏɺÑPţ&quot;]],&quot;encodeOffsets&quot;:[[[11635,56210]],[[12851,56285]],[[10303,56204]],[[10992,56065]],[[15450,56343]],[[10901,56945]],[[12970,56931]],[[12871,57124]],[[11318,58627]],[[9974,56142]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Denmark&quot;,&quot;childNum&quot;:10,&quot;cp&quot;:[10.2768332,56.1773879]}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ċøǜǜk~ĤŊ״ÆٖɳȦǼ̹юw̻Åcõ߂ǳ̄ʗ̇ͫȻǊ˷зH׫ȏƑĴ͏ÁΉՙǉŜŗɠHƐxÊsÐġÚÉĄ»ð\\XĶHļĴbÐM¬ÕŌƈǬ&quot;],&quot;encodeOffsets&quot;:[[-73366,19657]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Dominican Rep.&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@Ţŵ׳CɃēăçĳėȵؙչj̥˾ҝȢįȄїװЃĮϛÂȻʜ१ǫĩж޿ĢୡƗϣŖי͡ʟɡҬ؟ɊحŠėʒÆےȥϰڝ␣ᕧ൩୧ഝ˯ܹſȣĮŖʶĿτ௏Ѻ×ƪϏɚiʆ᣽ၮ᜿༸ἡኒ@̸@Ȳpیত֤¸ʈǎʊcĎeĶ]TÞæƊЎVҲŀžĒĨĜǲʤǄòɀÖǦÖƤĢѮǈǧǔG˄ÎƬÊTĄYƒd΢Ŋ|´ƘÊ೶^ĦʺªźÝ´ĝÈ±zćæ»þǒŇȶĭஶ˯Ȃ¹¸yØҞâ਺֮͆{̢ˤֆʀഺƂ͊ƸڲĤࠖ@ҌȻৈπφƓʾ¤ľצȣ֔ærēͥ˃&quot;],&quot;encodeOffsets&quot;:[[8405,37396]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Algeria&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@šm¤ȰŦîƠ³ȇȻ&quot;],[&quot;@@āà¬ĳ&quot;],[&quot;@@ǅn˒ǖŋȃ&quot;],[&quot;@@ǩĄVĂɚĆÜƣšħ&quot;],[&quot;@@ƹbƆƾ|ǣ&quot;],[&quot;@@ʙÂòĢǨƣ&quot;],[&quot;@@ЈٷęǁȍáʍpÛŖ̀ʪȽɬ¹ɞƗtȢļøč&quot;],[&quot;@@çüÈSě&quot;],[&quot;@@˻_KÒÐ£ÈƇƒƳṬĉ]vw`YųӍѥԏӷί঳Ι͉ЫĕÚʫ܏ˁƧđ¥e³X¡I±_i½kġåB¿|Ëô³ØĄ]Ō½»ÕYïQ¡~ı²čÀÙ·]ăė÷D¯S¸úńčFIa¦jº¬Œu´rf¥ˢåǂ̤ȘȞӢĥіéЗĕQpǠɹ̑խπƠˬţܚ̊ȘĊɚƢǗɄμѲՈূΠȾ֮ХДŋȢǛÒȯݶƃȊǠд̋аǑ&quot;]],&quot;encodeOffsets&quot;:[[[-82054,-3044]],[[-92594,-1372]],[[-91564,-932]],[[-92502,-790]],[[-93620,-471]],[[-92747,-342]],[[-93462,26]],[[-80803,1283]],[[-77091,-109]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Ecuador&quot;,&quot;childNum&quot;:9}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@քนƕǥ˱੉ƯɃϭʄљѪֳ஀ǥ˿Ҏࣅղ֕DʓʦΟĢ҉ਠᆣӸҋȱcšǌ۩҂ˉբՍ⮿AªŸï°ŝǙƗOᢱBᢳ@@᳾@ᴀɵࡦɐВĝրʢːȚšіĜଖȱʖƑࠎƋҴȁܞͬʖƢǘѺĠ̡ųςæŠψŧ̬êȺǙȳŢķǅ˦ǗưĜÅþ͘ȋࣂ¾ҀǊ¢ĩ&quot;],&quot;encodeOffsets&quot;:[[35068,31958]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Egypt&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ɐĭΣwêļgŋÌbŨƺǋ&quot;],[&quot;@@ąħ´ä&quot;],[&quot;@@ĳňԉˎ׃Ę˫µ¿Ē½ ¥@yƷĕʵµÕHǭȆǿò·Ö¹ÁťĥɁ¹œßƣqIZȿʠțƳǳŏOŗ£eCʎkǊoǠkǊŞȖ̈޺sˠúƨEÈhż\\ªDĞgȮj ¶ưȢŔЄł\\nj¶v¤ĚǀƴΦޛɞএФڟà̄˺ϥࠆͥКՙӲͩż̿ľRɰ̙Ƣ³~üêÙĭģĹcB«·ūÁȋŐ{Pu}yõĔÃüùĠƵĤûŦāƄͷˆΣО&quot;]],&quot;encodeOffsets&quot;:[[[41105,16073]],[[41039,16469]],[[41922,14319]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Eritrea&quot;,&quot;childNum&quot;:3}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ąƏƧĬɮ¤&quot;],[&quot;@@˯ɯwĉǰłƆʂM&quot;],[&quot;@@ŝĄÈðżýåõ&quot;],[&quot;@@ëȓȩŧȻ˨ڂȤǯǏ&quot;],[&quot;@@ŕħƅɔĬȔЬŬÑПɥë&quot;],[&quot;@@ƓɞÒðǞĵěȗ&quot;],[&quot;@@ťŨ̢Ȋ]ȗȧā&quot;],[&quot;@@ǁA~ĆƄă&quot;],[&quot;@@ȅ]ŀƪǺºçƭĵ&quot;],[&quot;@@ˈý͛ͫɭìċƂǛÃŉĀڐͰ[Ư&quot;],[&quot;@@ΩĮ[Ė̼}Êǅ&quot;],[&quot;@@͒Ɨ¥ƿƈ¤׶ʩ৾ğÆžؚȽ[¡ģîJƠ¾żÌĖÕমàХȱƩޟЕࢥȍˋȩƪčʛěޡँĺϧ΀ʭ؇ωʙҟĀśԙÏˁƣЃԡ቉·ʵǱйéǃʍɝğΑƌ˿ϘƖɶƭçϽϔҕċҤФϮůMȥɶ̄ԊҍԘΘjŤĮâȊŗŪȈƨı֔׺ѮˣŠÛɨѹɍŭؽkħ˚ѕǑġƐǒƚĿXðłçȔȃĘǢʵƮ´ǔްɞOŠɄĬтϊƻ৸ú૖ȕޘĔҺŭƜêҎŃҘä&quot;]],&quot;encodeOffsets&quot;:[[[-18317,28478]],[[-15770,28823]],[[-17597,28695]],[[-16726,29062]],[[-14537,28846]],[[-18262,29178]],[[-14045,29606]],[[1633,39601]],[[1480,39853]],[[3221,40746]],[[4397,40799]],[[-1837,44450]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Spain&quot;,&quot;childNum&quot;:12,&quot;cp&quot;:[-2.9366964,40.3438963]}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@צƝӿȁ̝[̿ʉǈȊʱĜgȢيľ&quot;],[&quot;@@ȟĠȊUVĉ&quot;],[&quot;@@͋ŗōƤ̕äӾŦɖą\\Ə&quot;],[&quot;@@Ŝğ׻ӱÌӇɶ̍ȣÑţŏ¡ś͕æηßȟÐ՛ˎ͗öƋ®շŽăJǦОΏó̅ĂɑʢƠňȽŐÀɴӶĄʠƲࣂ¤ÆĲ௺ǁࢌ&quot;]],&quot;encodeOffsets&quot;:[[[23161,60029]],[[23904,59956]],[[23474,60239]],[[28685,60912]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Estonia&quot;,&quot;childNum&quot;:4}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ÖGʶ¶ƸĖz¦@¾Àđˬ¶ׄėԊˍĴŇΤН͸˅ĂƃüťƶģúğÄûöēӯٽLץٔĎ̪åɟͱƺͭ˸˓ʪст̵ᠴ࡙ࡀ@ᢋᣭߝͽăϩǯɥˏ۩ƻĝę­ūBɋ_ğcŵCǙĨɋǺޡΟ©ąŏƩƍķݗŦſJȏ\\ś~޳ԘȽƂݑ´ɑ˸MŤnžl¨±ǀΙj½ @Hʅ̬ɯڬիӆƉʄݻ͠ʂҌ֢NĴĐJޔȞؖϾȒȆǘőƈĲƲߞҸڴϤŒͰాfDŘ¤ŐPǴȜƴɀʟYrJÞƤ¼ŔĤɂÄŦº¸ÕȀñǮȅ&quot;],&quot;encodeOffsets&quot;:[[39354,14775]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Ethiopia&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ȬÉ¯řʃĸĈì&quot;],[&quot;@@ų¥ÙŠȎù&quot;],[&quot;@@ǖƋƛłŒ&quot;],[&quot;@@ɫªͦZĹÃ&quot;],[&quot;@@ҩı̞Áʩ̏ǶʣֆŅզͥޟٵࢌও͗ďĝ́ȀēȇƩЀǟ˓ЈȱSƭљʉৄѵ̒˕̅ͻహ޹ལࡓਖ਼ĽǲǉǙΟ¦äŏɷ×ďÈ৯ʿࠛωƛƬǦʋǀƋŷʋyĺ̐९ǺƜ࠶̋ͰĥـюʦėƒٲĘǴ˴ࣈؘٖͤ߬¸ºԴ֡ǈǂЇ­ϣϔʎҸ̇ˌþʚɻƺдڇΎܙźିѠόJ@ƢѸºۊҭގÑѾƂࣴǳڴͬ˘מϠȊԐQԶƄ୨ͥǈǕХʝĶŽ&quot;]],&quot;encodeOffsets&quot;:[[[22708,61820]],[[21966,61983]],[[21727,64760]],[[25445,66551]],[[29662,70679]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Finland&quot;,&quot;childNum&quot;:5}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ѻŭ͂ǀź&quot;],[&quot;@@ăÒ¬òƃ&quot;],[&quot;@@ʾɽÜέױƷՑƾµǶȬ˘˂Ŷϲb&quot;],[&quot;@@đAĒƮ@ƫ&quot;],[&quot;@@s@²@ê@ŞĈĩȥ&quot;],[&quot;@@ÏĊĞyÑ&quot;],[&quot;@@λϿHġ̦ȔCȍё½ǻĀǏƿʧÛǫǂðƔȆSغ͎ϔĆ@_&quot;]],&quot;encodeOffsets&quot;:[[[182772,-19429]],[[183654,-18536]],[[182559,-17788]],[[184320,-17370]],[[-184294,-17331]],[[-184247,-16898]],[[184320,-16556]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Fiji&quot;,&quot;childNum&quot;:7}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ŤQÑŷǓĜł®&quot;],[&quot;@@ݲĒĴÉչҕ˙cęŹ˩¡ɳŌ؈ʈ˿º˲Ö˕ʀʂĕ&quot;],[&quot;@@ƍĬǤwó&quot;],[&quot;@@Τ¯éƅȦùZƂʄƘőŷÅƚ«ݡʥ~ƍҗæņŽɯm¯ĥɅƤàǬјȬǌȸȆ&quot;]],&quot;encodeOffsets&quot;:[[[-62483,-53028]],[[-61733,-52697]],[[-61554,-52629]],[[-60262,-52500]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Falkland Is.&quot;,&quot;childNum&quot;:4}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ιÆŉǺàż̎EƬșǛ&quot;],[&quot;@@ġænȲŌċȋ&quot;],[&quot;@@֥݇ɋչˏˉܩŦ̥ȟʫòç¢jqZXRNB¦ÖìŪɄ¼ĖtƨŨ`ŀƤ®ĄsƲˇΦŇڂҼ޶ࡪ˿ԞНƝĖüƌũ²̫ƦʄƦӗ&quot;],[&quot;@@ȥw¬ŔǝȸʊýĎɕ&quot;],[&quot;@@ãJ¼Ĥhĭ&quot;],[&quot;@@ƛ°Xʘǐëɛ&quot;],[&quot;@@ǍC¨ɺʤȿŽu&quot;],[&quot;@@Ð֧̩س͇ǠäĦɟȘâƐœɚȾɀмĘ¦ʮİǱ&quot;],[&quot;@@ñƥȞǮū&quot;],[&quot;@@Þ_zY~mªQÀR~¾\\Ǝ͢ʕ׸QֺƭѥۇAӃɭƅǧ´ƗÉ¹Č¯@akiwŋēŏėkmƗ±cƣʹǩWĳkƗŁÅBÁQäJĨŞò¾ĜŲNưk\\ȿŀĩ´¦·dȗƹ̘̟ÉšϋƟ̜ȫýЯΚǓˌvŧͭޡӋϡŁ׫ž̅Ǽ̇ÑکǄյ̵ǧɷƆПভßĕÖËŻHĎšÇPÕؙȾÅŽ৽Ġ׵ʪƇ£¦ǀ͑ƘʺƀȪ࠸ƚŊÛØýćƒܮ҂ҁȯϾͽȸƐvĩӐ՟ǢɭʜȒƫŀƚĤʈµțĂѹBÜƆ˽cĤ౱ǔ̯Ǽ̌ŌȹĴˮ\\БºôȚƚદȆҐʯȸĤϊÅĈĪѼǃŸcͮɭКԈGĶʕࠌûӤŸʋº¶ǎࢸʞ̆ɈäՐܒǲȠ̅̈|ƔȻ˔¯ĀƝТ¹sɳͬUɰǊ¤̩՞ɷʂx&quot;]],&quot;encodeOffsets&quot;:[[[57137,-21851]],[[46265,-13288]],[[-52892,4159]],[[-62286,14843]],[[-62700,16272]],[[-63067,16392]],[[-62799,16620]],[[9708,43833]],[[-1206,47006]],[[5929,50728]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;France&quot;,&quot;childNum&quot;:10,&quot;cp&quot;:[2.8719426,46.8222422]}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ÐýəzǊÄ&quot;],[&quot;@@qœƹvĬƗϓˬҔµ&quot;],[&quot;@@ś«SŴŰć&quot;]],&quot;encodeOffsets&quot;:[[[-7359,63631]],[[-6790,63722]],[[-6559,63753]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Faeroe Is.&quot;,&quot;childNum&quot;:3}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ōY£ŦƈLjŗ&quot;],[&quot;@@ÛåĴƤý&quot;]],&quot;encodeOffsets&quot;:[[[162115,6978]],[[141459,9729]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Micronesia&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ķ̻ґՔƜˤ¡ȾϿęɷ̽ɩ÷ҵԪ̵÷ેȅ˝ŗǥŗętŹ˞ɥɍЉèǕ͌ǟĘƃđ^ͳ͏éϫÐÉгȈūǍȀš¯̅ǋaƳƌɧƝĕȍڃݺԿҞ˸éοƸ˙϶ƸPǽÐȓѠʂ˕ƶÞǥ¨ǆţµśì̥רȴć̌˴¸׎ĨƷˠīǤŴϣĐȅɌƞĦĺówϤ^zzJ²Iz£`wĒமEѼG՜hŎǰFඊÖā&quot;],&quot;encodeOffsets&quot;:[[13613,2214]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Gabon&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ƻďʽàɀĜȺë&quot;],[&quot;@@Ů_˗ƟǍɄɆĲă&quot;],[&quot;@@γ{̛̈ˉɯʁVїɪ̪ƲſĔ̢Î˨˘زŰτăˌ˝ƉƩʞnĦƍǛ¤Äɵ΋ȅǗ&quot;],[&quot;@@ȏ\\ȔǴɕ&quot;],[&quot;@@ÖȡȿófƔǣÙ|Ģˬĺ&quot;],[&quot;@@ďà̆Ȏȵʭ&quot;],[&quot;@@҇§ƤǔŭĸƸ˼Žaū&quot;],[&quot;@@ƉɠŦSdɋ&quot;],[&quot;@@TǇϴ½ɵǧïƀʍBρȪϤȘƊƕ&quot;],[&quot;@@pű˩Ìʺæ&quot;],[&quot;@@̗ɩňÓҵɫčÄȐĠȓɒ̠N§ĦҐǜś&quot;],[&quot;@@đǍٷ̣ěƮɷȭؚŌૢKʘȓڽދ׽ǕΦǰŧֿȍΩÊجťϘÚϞĽЮ˧Τܯ८ӯķă˒΍͕ņ͝Y̮ӄ̙îƧʻɇȠąɼƄиOԐǥøʅŽ̝̋ůƗνÕŜƃϻęࠬđaƱοɋ։ų࣭UՋŎèÛƵÕћmIĹߵĨͽëɳͣѝź҃đ͟ɃчX஺ड़ࢪ`נҊܡ̍ԇǜ˿mŦúʛæџĩɡĪ]ǬߺˠȦɜķ̾ӧğΒ˴ۺǒˤãƖˆį˅ǠȀԺˍMͻ˶ĘʲάưћI΁ƕܡÆÿſķÒŝȌиѠǏ̺ʌÆɓĦĜΫɭŦʾ˛ǝũԙƥ¯ȐϾėɆΠנϷȏЗƦ͸Ŭŋ¦ʦˤțŪǴƘƍĺŘǴϜ@ɍǂÚƚˤpQʰӬ­তŘǦ]³ĵ&quot;],[&quot;@@ɜĻҍÄlƆɆč&quot;],[&quot;@@ɌýȹӇRɴ̻ňʐ¦ǓƌǪĬ²Ó&quot;]],&quot;encodeOffsets&quot;:[[[-1091,51907]],[[-4297,54602]],[[-6367,55387]],[[-5227,56780]],[[-6275,57273]],[[-6113,57155]],[[-5916,57697]],[[-7423,58487]],[[-6292,58886]],[[-7378,59068]],[[-6347,59765]],[[-3184,59920]],[[-3130,60447]],[[-1339,61991]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;United Kingdom&quot;,&quot;childNum&quot;:14,&quot;cp&quot;:[-2.5830348,54.4598409]}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@˂Ə®³SïûÑēẂĜڱɠÁuǹŏsYƑe؝Ýէuȑ«Wz~nmhûųĪítÒ^ÓNÙMaOoWčĳғ²ďÁRß~ĿvÇhǈǂ¾ɞɱׄշͺ̽êПɰÆ¼ÌӂgʚīŢɲĒµĶ³র¥ȚßRö»ЀŧÄƈ½`eEsUlmÆmŎI zĊlȐòƨɠōâŊjTÔuňöeƶũȂLŤloýȫH}ӘǷǾĉȷǃĸǍ&quot;],&quot;encodeOffsets&quot;:[[47417,42504]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Georgia&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@àāă̇ϼ͍ĭիàğşʘÃҡĭû˂ͻƽڷŔǉĝхǰͯϚ̧ȥɻׅ«ቕ࠵थ˜ʢÄ¼ɼƘǣĤȓࢎɤפƜВĸø°rZePxÖpÿӼ£ƀÌ³jʲTŊU¬¹ľ]ôU־Ļƈî΀ຌXΒéˠȪȘ§&quot;],&quot;encodeOffsets&quot;:[[-70,11383]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Ghana&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ħǥǔƷ̺ǆȊʳκ˂ѪƵͬȎǬ̐¿ȎЕGȽ΢ʳɣ̛ˢeÐщɔƏbƅƏǃdБȮãmȏânĽÁYǋȚťpɣŅüŉVʃmO¡WŻÜþWùĭǯVě÷ƛuǕ³ơŊȗΧȑ̃ǘĀʎůդɛǈʁěéøï§GÛV]đĳ½ŇLs\\Æƪʌī̸ģng\\Ex¾ŜJzÙĄʏͶőŜq¬Ëf՗GșįʉnŉǋǕ˥ǝġĳǋǷiť̸ɉĬBͤŉȍɈ͍ĜƵʪbǼëßĉȰģóƑÛPĘª°äƒˬºÜvàFŸŀÖÀ~ŤOƚZȄÒDȊM¦ßŏľ¾Ìń`òǺ¹ĬHæլlťŊ҂ǉࡔÄ&quot;],&quot;encodeOffsets&quot;:[[-11662,12703]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Guinea&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@½ɸžŒɌǣࠤǖשiǻĕǭȴࢬAèŠˎîמʷήŴŕΛƟݻːŕƇѷÑiƗۃEĩ÷&quot;],&quot;encodeOffsets&quot;:[[-17165,13378]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Gambia&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ËovŒġ&quot;],[&quot;@@Ĺ°Ɯê¡ř&quot;],[&quot;@@ķX¸ĸÀŏ&quot;],[&quot;@@©ĻĩİƔL&quot;],[&quot;@@Ń_½ËǰƙN¥CȉȃÑʽI¿}ĿÕŷßEu·ÛƓ˫­á«§ÒŌƗģLŀƩ¾ƮĽ^΀ǀƁöƵÓõĠĴ͜łܧƵlŶǽiǃŒêƼǉɱŴ°TŖaĖhƦÚĈ^ʰgɞ¬͈Ǆ܆GʆA˰AGåºīñǹ&quot;]],&quot;encodeOffsets&quot;:[[[-16277,11349]],[[-16501,11325]],[[-16283,11741]],[[-16370,12168]],[[-14090,12557]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Guinea-Bissau&quot;,&quot;childNum&quot;:5}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@Fѻ஭đ_xy¤±JyIy]Pnõ¼ĽrΞڎwŠlȤtMT¯{Ġڼ@ʲ@Ȝ@H՛&quot;],[&quot;@@Ƥ@ŋȯ͹ȓUƼɬʶ&quot;]],&quot;encodeOffsets&quot;:[[[11605,1566]],[[8946,3849]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Eq. Guinea&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@˄ºµċȶŕୂW¾ȍѺǊŻʝଫíûžȵÒܷĆmɸĒiÄŢĬĵ&quot;],[&quot;@@ėŐŸȈ̗&quot;],[&quot;@@ťƎĔǍ&quot;],[&quot;@@ŅzBǶѠɚŧ̳ȳŕ&quot;],[&quot;@@ĥĬØå&quot;],[&quot;@@ǅČúú«&quot;],[&quot;@@ɠƠŘ}ͷš&quot;],[&quot;@@īA˒Ĩǥĥ&quot;],[&quot;@@ċ]ŤŎŅ&quot;],[&quot;@@ơňĪã&quot;],[&quot;@@õāŢƎłjȕ&quot;],[&quot;@@ĉN¸àí&quot;],[&quot;@@÷ÐŴe»©&quot;],[&quot;@@´Ęɞˑŧ&quot;],[&quot;@@ċ¯ƇŎɔÝ&quot;],[&quot;@@É£úžoę&quot;],[&quot;@@ȘďǭÃɛâȲò&quot;],[&quot;@@ĘąƥǗǆÔØǒĽ&quot;],[&quot;@@{ÇəɦɎ³ũ&quot;],[&quot;@@ŰʿȥÓńĉ­Ǯʜ¦û&quot;],[&quot;@@ǝtČĠũȄ˄Ç˓&quot;],[&quot;@@ŏuŞɘMȡ&quot;],[&quot;@@ői¯ǈǂƝ&quot;],[&quot;@@ĠũԒƏŰέˀą©ť˗ŚƟɮ͝¬̞͍ͯÎ͚ƊƂÕ&quot;],[&quot;@@ƺɿęviď̡ĜƒİǙđȓĖ˒Ƥȶ&quot;],[&quot;@@ǋzȧʲɾNãėȚȡ&quot;],[&quot;@@åƥěðƿGŮ͊a&quot;],[&quot;@@ɑĞŪŴƫ&quot;],[&quot;@@޷ɤʽŗˇøͧȉˍpĔˡ̄ùŌƯίǰƻ{ȪǷiűʁɒȧǜ˷ؗЎtǈʗăϫآܣơ×Nƀȫ¤ŕƲŏлƛֺǥβʹʄÝ¶œIϳѥ̜ϷſϠρ˟ęνǬμँϋ̆ʏˋ̇ҬĿÁɅʹ̀ĆʴүъɼʰɊkƔŸ࡬̡˲Ɣٗʲďç̕²бùšƒwħǅV˿Ь˾lNŒͽL΋ʔġȀûĄćÌlBWÒÚOƨŰAÏĞ@zxXvr¢bǞªȊ̎ŲżÙŸRÚԤfªxŸ°ǶƲǆxʺĢlĸ¸ź̺SìÂŐH¼TĒYČB͂ÖlRp¶ˤEĐ~EɌǑȂRŞ£ĲÓ֠ÌŦÌh¦Uò·ƶllĀdĶwɖīǗʙƍBʅʗȑ&quot;]],&quot;encodeOffsets&quot;:[[[24425,36389]],[[27829,36317]],[[23608,37059]],[[28512,36792]],[[26095,37267]],[[27096,37464]],[[27597,37609]],[[26480,37674]],[[27669,37847]],[[25886,37959]],[[26159,37855]],[[25113,38017]],[[26013,38318]],[[26655,38431]],[[25863,38503]],[[24941,38479]],[[27469,38719]],[[21390,38713]],[[25592,38666]],[[21108,39305]],[[26721,39136]],[[21184,39536]],[[25267,39741]],[[23978,39894]],[[27045,40274]],[[20560,40380]],[[26049,40943]],[[25369,41590]],[[26664,41705]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Greece&quot;,&quot;childNum&quot;:29}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@@ƢĞĝǯ&quot;],&quot;encodeOffsets&quot;:[[-63196,12301]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Grenada&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ĩķ΁ĈӪƼ½Ƌ&quot;],[&quot;@@ǧàǈĦ`ǅ&quot;],[&quot;@@ǁwŗǨȴǊΒÛ˫ʝ&quot;],[&quot;@@ּřŪǝත̉ԕŮѲ¾ƓÚँƢŎȤϸOяǈϬƸࣚģӆɕ&quot;],[&quot;@@ύ`ZĈδħ&quot;],[&quot;@@~ɥۇǗ͗ČறÇΘΪ࠸ڬƘ͘Ĺ&quot;],[&quot;@@Οò̼Ɯ¤ɍ&quot;],[&quot;@@ҥȑխž৔Ô&quot;],[&quot;@@Ԟ̷੹ƻˊܘö&quot;],[&quot;@@х͚Ǡɰʦ։&quot;],[&quot;@@ۓĘࢴȟË&quot;],[&quot;@@ࢣėЏŎॾǠјušǟ&quot;],[&quot;@@བྷɞѩʸܼచǯ¬ͭ&quot;],[&quot;@@ↂʭ㇓Ƨď㞆ƨպʁ᝚ȱಇʹ㏱ƍʵę̀ī෢Ġᗆ¡ܘʧৄʾ๠´ĜϽབྷەᰦܦᆦȯ૮͈཈ຶōࡈȍෑ̳૛ā§ȕቍǃۖūҩƧ೧áଝî؃ȷ঄۩ᅡѧԅߙܰǠ଺ǉpŹ׍ľѧÑϘȿ޴ūܜÉЙဏŤॅțӏĚΣ÷ؚŋ͞ʩ୒«ԂϱcӝߩŒএʓӫĆҎŽ׬Ģľρώ˶ζ@זέçəݙAͫũ઩ĜX˒͇ɛƾʽ๤ţš̗໳ȉݕňޥ̮ѧƋۿɀؖ˹੩ɏ৩ƶؔƿࡩġǶÏኔˠަ\\ᄄЭɍڣ๳͈ҽҐၷ˓༂ƾƎˍϽȡϜøᗨ׉ѩ̣ÀœĲƸҠȖߝܣÁ«ͮɇΡ՗\\եǘӹӖ૕̊ঢ়°gÿਫ਼«Čʟࠍțද΀ćßǑࡃɇᏚfęࠟțƪŏ̚Ǯ఼Ŷ༦ǵ୐[Cûعŏ_ĝۇ±łůҳEBūݥƭĆāԗɳڇǵᙡͅԳ\\ϗĳͷ¸Ġő̱³ଉ͂Ǝϑ࠯̩࢕ࠅࠫͻ֭ǆȦʧؽʹŭƪśǻͭæ̅Ƿқo֨֞݅æͼĽ̛͙͉ĘˈʡခŽԄǹ̟ǕˇýۥªĲțʼ ЊλԋɏڣÜҦƫΎVÊͿȋǇɯg˷ϝϥPˣŜҒȣɱȡࢃaڐŵƙΓǲʝЍŝȨċ̵܍˝ȱ݅Ò׬ǡúˣǓŏՓĈʠƕȽǭ`¨Ā̅Eǂ̐͛ɍ١ƼXƜͤîȀǨԽȁ֓ƞăƊɬψࡇ͵ળ¡ΊȔԭNƶгṷ́ˀûʦҪǄڛåÐȠٟȬjȾъ˔ԅȇ࣡ېß̪ઌǪȏK¦Ė७ǭĻĐʮɒތȖМȷĥɎͩÀϋκȪ͹нƙŊ֕ґ˱޾ɹƤޘ͔ѸÀՋ«۟ɗǭňοHþ͐ʉÒᆖ۪ົ֯х¿Ķє͊Ƭն°ࢳυǰðʄॎ˦ႬȅҵƔǞĨڝÍӣĊଢ଼ʋӪք଺ų˖¸ȸʮࠧǕহǛ˂κĈࠚƣ֬ŰŚŒχÝƒ͜ڌٻڈڰ࿳٥Ȳ࠭Ĵѡɺ̬ĶନÍྰ͕Ǭ¬օƞÈɞѣƂيQ̛İോ¾ĬɸऺǶඛýʜȔэҲɳϘϿҕǉ´Ǘ؍ùݽƼɺҶЎȶحƩ¯ĸ˺®ʳČ֪Ĳǀʨ˭Ťǹç͉Ú͊ˌۅȚɠǜ̶͗ࡋGѲĀUǮϲĈኻۜˈźɡƶᖟЀᄓǎҩœϵČࢿƽыĞӷċѷØˊȣఉø૭˨଴ɄಷîiɈޙƗѹǨɺŬཔj۾Ƹุĉʩʹ࠹Ɓ޷àؕœহȜΞŢঁyಝ͌̄ʎےŢᖂȞԮƲᒪŖࢄ۞ԨĊᖏmǧʶᒈԬژ¶׌Ɨŀˢ௾íӾ؆ಾ|ᖖѫᕭզ◴݆̂ƿĬѕ֚҄ᅈΩ଒p୧ϸݲö⪴׉ЮӴૉ͈ᶰÇюÎ♣ĠǤي፾ȸ෬ƍߌȚᇚ˫ӽ̺ࡶń㹪Ê&quot;]],&quot;encodeOffsets&quot;:[[[-47377,62241]],[[-37920,67105]],[[-52237,71222]],[[-53996,71624]],[[-52915,72556]],[[-26042,72624]],[[-54820,72746]],[[-56337,74539]],[[-18432,77218]],[[-19028,77868]],[[-73387,79182]],[[-18035,81742]],[[-45941,84054]],[[-30671,85571]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Greenland&quot;,&quot;childNum&quot;:14}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@˶DʔŁRƾ̮ȅÿáˍɉɷǩƳãáǧºǑQ¿īÝÛĩǯsvůс˳ƕїǊ٩¼ܛҲÜΘ^tr ĥȺĖƦŀǪȄ̮ʬBϢ@ɶ@ƴ@ÚDYøTĊø@­¤ĕz·@°sÈ§ÞɟƆη͚ǶAǠCHӂໞAÑྩ&quot;],&quot;encodeOffsets&quot;:[[-91374,16270]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Guatemala&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ýƚȐƾÆǗʻ&quot;],&quot;encodeOffsets&quot;:[[148216,13578]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Guam&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ĽǳĠŝķƧ͋{ǥƛÒŷǩӇ΂ש̀aĘѱвۇȆāУsËh¯ÎuRǗ§ā¯óœ¡£mǛGßğg©ŅʱÊµ_¡ġKŻơGµM΅Ʀʯ˖ŋ CĄÓ_vB̼œöĕ˞Šݮʬ̄Mx¿ÀıǢłϗƲƄҤŵƀċhÿ·ĽWǉ÷gՓפ]ôĢàäÆoƞB¾}ÈmÚ¶ĚάÖ̮Ƞ~øGg`ĵbµm»X¥²í˘ǤɸИȬĞt~Į´d¶ƻȲۈЋׄ֩~̟ǉխɒϮδÅϊϡˀŹՉ&quot;],&quot;encodeOffsets&quot;:[[-58567,5682]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Guyana&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ȯǵǪӰŗŉq&quot;],&quot;encodeOffsets&quot;:[[75477,-54412]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Heard I. and McDonald Is.&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ݷȱĝxǷŲĽµ×ƛűɩѳϟgMOǓĸ³îʓɽ]țhĽWsaW¡PÁȓhÿeyÁIå[ùǹ¥_ɹYŵ̾˙ĺÈʖazÏ¤÷Jĉ_ƇĞʡŗF]¨MºO^ԝ͢ȯǈǈRÀ¹ǒâǨƴäɸǪˎɊĀâĆyɎƮ౤ąΞƞ¥ÐфĽєøΐƿʤjиΕǩĪřw`ûƘMƖƣɚDůŬɶŇâƉÄÌ¥ɍ`Ĺĉč&quot;],&quot;encodeOffsets&quot;:[[-85642,15234]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Honduras&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ŘËͳøɜk&quot;],[&quot;@@Ҍá˱mǙĐ&quot;],[&quot;@@٦˱æŃ׋̪ٹǾԺı&quot;],[&quot;@@ʛ`ĎϊÓė&quot;],[&quot;@@Æ×ƕĤĐ&quot;],[&quot;@@ƧȬhɞƀщ&quot;],[&quot;@@̟ĒĶŪȪȻ&quot;],[&quot;@@ÇąȌˏ¹īͪƿ˱Ù±ɣƝ\\ƣǎ܋@ݧǘ͙»ȥǧɝƲȫU©΍̮ȵǔͫࠊ֭̈́σÅËֵϢёŶ΃oڥոÁì̊`Ы˦ŁВʯǼȥϝп˿ը̤­Ю®¶pŢŶpK¶áŦÿƊlƀ£ŌSĈvYOÐäÝÖ̀ňpĺQÄÍ¼IbкǮǸŸĚUöq®]ƮËļÝτ˽иǥҨƨbĎĂȬr&quot;]],&quot;encodeOffsets&quot;:[[[18031,43796]],[[17051,44029]],[[18092,43927]],[[17189,44310]],[[15741,45030]],[[14836,45732]],[[15166,46057]],[[19360,47035]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Croatia&quot;,&quot;childNum&quot;:8}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@cÏɋêǗƎЈƧ&quot;],[&quot;@@ƇǫÖŋN«aÏĻĳĵG[W¼ïÊăĢÙtÏșíâýÊĩۇÝёČ̥½řůӽ΄úƦƆூȑΎŞ|ĎϵͬĜ̴؟ʀȂƊӦdΖſ͖¡²ll}ǛǛČ÷&quot;]],&quot;encodeOffsets&quot;:[[[-74551,19229]],[[-73366,19657]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Haiti&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ĺDˢɯƾqĜƍ݃χ݅ਇ̣ūħėȑqd£`ȑh÷_ȗpǉėًſčāaƧҧзǦσ˾ĽÞƫÌ­^ț̜ǅL̢ŦUͦȞŖɉŜժäʤԬȣ߲dÊǴ۬Ȉ˚Û͐ŰƀȚ߲tˆǵ̪Ê&quot;],&quot;encodeOffsets&quot;:[[22663,49568]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Hungary&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ĹVhŘѴʌ ƧЁɑ&quot;],[&quot;@@ƭʚĠīť&quot;],[&quot;@@ùŐľƋ&quot;],[&quot;@@ٮө¢ãœƙɑóʙĂҙΨџÊŃǀ˲ŶլÈÐÕ&quot;],[&quot;@@՟՗֯ǕţÞĤǈŃĤĶ̒˞ɰȸñƌȨВȺ^ġǲV£ŭŝoĜʣ&quot;],[&quot;@@Ň°ä¤č&quot;],[&quot;@@õĺŜŤwƧÍ&quot;],[&quot;@@áJ¾ʴĢ÷ýȅ&quot;],[&quot;@@ʗǊƈĴeï&quot;],[&quot;@@ŃǧÔÅ̅u͏ŀȂ_ʶ˺Ȝˊōßɷ&quot;],[&quot;@@ŝǝǿêʾȶ Ł&quot;],[&quot;@@̹ʙ˕ȸǪí͔úŲé&quot;],[&quot;@@˧âȞŖĊǷ&quot;],[&quot;@@ÅƺƤĝȁ&quot;],[&quot;@@Ќæŭفõ¦ȜŪ&quot;],[&quot;@@ʞÑăíǟÆFú&quot;],[&quot;@@्ʋȣìïďʗeСŐ՟±ďƈÈɺآƮۮ˱Ѭĺ̚ơѸ˘ÎèƉƄäøȇȉʃ&quot;],[&quot;@@ñȶɒƀ˃ǁ&quot;],[&quot;@@̴ĐőǴİǠ̷͑Éòć̓mċƴǃƓेɑɭþ Њˢƒ͸·ȪʇƎaɠŖΛɀ¹Ǌ̦xŀǏ&quot;],[&quot;@@ɎɃҹω÷ɶωǎũǲЄiǺĸʚõ&quot;],[&quot;@@ĿïĕȦǢatœ&quot;],[&quot;@@ˡʃγÄȯĉƪ˒ȨͬŔǈă&quot;],[&quot;@@£ĢĖc±ý&quot;],[&quot;@@ȩŋիfδېǶńЌ¤Ȁʱϟӟ&quot;],[&quot;@@ǱDrˀъӔþëûÏg̟ʣ̻&quot;],[&quot;@@șîƠZºć&quot;],[&quot;@@ş¤ĈÆĩ&quot;],[&quot;@@őFOĈŢč&quot;],[&quot;@@׽ĳͳŶŢƢǚhނNĊñȕŧ&quot;],[&quot;@@Ɓfjüʲßƙ&quot;],[&quot;@@ŋtŜúOĭ&quot;],[&quot;@@ǵ΁ț`b̦ôXãɦΠɁ&quot;],[&quot;@@ʘǩ֐Ï̈щ฼Ɓ΄ѰŚWǬɁ̠ҠȵϞĠʛŪé@ȻȀėРÇӖú˶ƅmԥǒ̫ૣОӗĹঙĔݹƀ૙ώғʏŉ҅ÖՏɄۡĔÄˆ˓ŀ߉þĬƞĨįƞˀŎZè˸ǦǞـƷȆǎ˞ē&quot;],[&quot;@@ƓSׄ¨ѯ&quot;],[&quot;@@ŏPĔÞ|í&quot;],[&quot;@@Ł½§ʲƪȳ&quot;],[&quot;@@ӵɯʉɬŮ®ƪřŀŖIȖʈƨɻ&quot;],[&quot;@@åïʘ֜eɏǋ˛&quot;],[&quot;@@ɍƀɖGĥ&quot;],[&quot;@@ăĆìA&quot;],[&quot;@@ȟƴĘƺņñBɻ&quot;],[&quot;@@åıɿÊĨɀwʬ˪Ű¸˅ūǡŋ&quot;],[&quot;@@`ɫşØé͝ǸǍǿÕſɟƕP·ƦưɺòӼȆȚĘƏ&quot;],[&quot;@@¨­ʧǂɀœ&quot;],[&quot;@@ƕĩęǔȲ~ī&quot;],[&quot;@@Ɲ«ºļĤÏ&quot;],[&quot;@@ʡą«ÒͺƸ«ƃ&quot;],[&quot;@@Ɵ½ĈĈØ&quot;],[&quot;@@ȳŝJҦǦǦԭ&quot;],[&quot;@@̮ʭFȯҙǅЅȀƃƸˆٮf&quot;],[&quot;@@ťÔƘAqÑ&quot;],[&quot;@@ՀĽǆšʒσ¯ʋ߯Ҁ˧CĿԕȀ̅ǵ͑ʔȗ˵qɲ˒̚ږƸĕʺŮɪã&quot;],[&quot;@@ũɕ˼KǜɌǹ{Ƴ&quot;],[&quot;@@ŷȕǓŠȱĻ§ʐĒ̖ƞ͆ƕÚŏéƗ&quot;],[&quot;@@ǁáwʜǺǹ&quot;],[&quot;@@ȣðȚɬˉ&quot;],[&quot;@@ǉ̀ºĐŐЏ&quot;],[&quot;@@ʶܑįûĆ՘®&quot;],[&quot;@@ÆɽƛÛѕƲԬƨ&quot;],[&quot;@@ȀMłƑݫŅóŬôǘҪ&quot;],[&quot;@@சǧ֑āهʪ&quot;],[&quot;@@īĀŰ©&quot;],[&quot;@@ːڛϠğǧˑ²Ʃ֙ȺǳզշŜ˜Ͼł¢ĬǡhǔǄzŖƏ&quot;],[&quot;@@ĩpƮÌǝ&quot;],[&quot;@@ӹÉƕŜɄɎь˟&quot;],[&quot;@@tǽǔŸĦčġȥVďƭmʾɕʃážĆɀʰV&quot;],[&quot;@@ȹąZʖɤ­š&quot;],[&quot;@@ēDŔƚ¯ç&quot;],[&quot;@@˯ƘȍΌØȒɎbˬ֣ēų&quot;],[&quot;@@ǿ¼ğʞ̠ͯ&quot;],[&quot;@@є×М̱ǯĵȽƙ̘č¹əȘ&quot;],[&quot;@@ťh¬ŢúƉ&quot;],[&quot;@@ƉŴÎVģ&quot;],[&quot;@@băȏoǮĴ&quot;],[&quot;@@@ǋDᲗħͥĨƓBᇳࠉޢĪɮƳƫҥóŗǨ̝ɋǖմ˹˰ΰ¼˥°ȵǚɜàΧўţͨàĘƥŞŎɃuȴٿѨ։ń՛ʎڅäѡ̺xľưbԵOĳŲơkʝ˴ƎΦş¡ɷœįХŷƍ˫JƇ̔ĬŸıɎٽьɔĞдğϺ̐ђƽ®ƤŶºħĈŊǈ߫Ɲս~ʅɄýβ՗ƖʡǐɒÈʺҠŸӸ̈ϴ½ԬʷфeŚđŻǀ̣Ź̝öӳɞѯpɀŨØͫŢrʧ̪ƅȢp̺̌Ҁ؈ִƘČâ¡ƺֶ̞သܫ۪ćŀƉȎE&quot;],[&quot;@@ĮōȑǉėǐǼň&quot;],[&quot;@@ĬűÝšɴǗĳ×řİƉLƎƗŤrƒŌÑĤô&quot;],[&quot;@@ŉqNȮƐKǯ&quot;],[&quot;@@ɳSôŌǀķ&quot;],[&quot;@@϶ũÀş˫Ï͏ɲɶɏůċ½ŮśÏˁƂłŘϚÌ&quot;],[&quot;@@űAİʲĕȎȆɍíɯ&quot;],[&quot;@@ȐęҷĀĄǨȤǍ&quot;],[&quot;@@ũP¢ŴĈƃ&quot;],[&quot;@@ҋĢ`Țиȕtĥ&quot;],[&quot;@@ĝpÄ¾í&quot;],[&quot;@@ϷƶpĘɲùƖǓ&quot;],[&quot;@@Ĭ]×ƧőèþĞ&quot;],[&quot;@@ÞƕñǽŗȀƿĢƔȊ&quot;],[&quot;@@ŭðo˒ƾƍ_ȳ&quot;],[&quot;@@ϚЭģ·ŗãȦǕĨ˛ДɶĪł×&quot;],[&quot;@@PŇЍɸϾů&quot;],[&quot;@@ϱѳ֣ƑЧlɥƖဝ©ιð͗ɓƭϵ¦̟ƬˁɶƝŴˣК~ΪіͦĕʼƨԠD¹Ć˼ôǪß°Ň³ȏЋĔշջ͡řǩǝʝb޾ࡻĜʗūΛπϵƄhr˝ŷªԗǙÝʕϗÖďƮŌШ؍Ӓƌ̔CΔơĘȍkͣʁƨُaއšѹŶϏГ\\ȟĭƇêǓʠȠڔ|ШſѬЇqŃŞë֪ʸȨȖҬYѬǘфǠȎŐƱĹٰŦň³ǖĖǦ̚Ѷ˨įɠͰǶÚ˔ëǀƧ܄¥ͶơȔĆܪûԒ͌ΎψƐ\\ļƷ́э&quot;],[&quot;@@Vʏǿ³ùʐʤ´&quot;],[&quot;@@Ű_ðǮǌĬ¾ȲϺƠ^ϻ͹ȕţ̎Ʒʐ˫ޕɌăƣúҟϔէ͇ǀ̕϶bѼƝ˖ÐȦƯʖǠנ;̘ṷ̋ľŋ@̵̝ˉäƓ&quot;],[&quot;@@ȏŢƸaĿ&quot;],[&quot;@@ƃcÝɚ͒ʦòĻÅȿƛƟ&quot;],[&quot;@@սʞùƜƮÂѬ̽Ž&quot;],[&quot;@@čiČĨBý&quot;],[&quot;@@ËǘŨïÛħ&quot;],[&quot;@@CËéĮî¡&quot;],[&quot;@@ġŶŐqmŃ&quot;],[&quot;@@ūtɬǂʟ&quot;],[&quot;@@ōƽ¥óƒȢb&quot;],[&quot;@@ǹ^ŦĘȭƢȸȠŨșÝʝ&quot;],[&quot;@@ğāʾ͗؃ÇʒǑLțɒŉœň·½άяɷʓ৐࢛ϙƗ˵¼ʅȌ¬ǭȁƅȇг·ҹĊϓկϝƣƮ\\ʃБϧŰ@xśřǻɂƅǯǱ\\̋ƏúǇʧϿਖ਼ӗƗژãėď@ǮěŁŻèͅƩāɔɡ§ʹ˂¿ɇǳœƃá˅äΩșжŅƘٝƳčÚÎòǑĥŇŊˉÙƇ߸ŗŜpӴǏɜѹǢĨƚɁȺŖΠʿ˚yҴȆƢĴķ[ÆɌʬΪɂĘùōĬɿܐمԄǂתɨŎĜʞʒĶϼPÂŏԮǕɾǖԠdˌѺɪͤɮĉĤɖňŌǪRȌ঄ƴžռnӰЊƕ&quot;],[&quot;@@ĥĠǀûðǢƐɏĕɍ&quot;],[&quot;@@ࢰoלړ¸ˑ஦އږ࠳̪ȭ¹ʜǾ^βӃҘɁ̶ԋբɛqƍϧǗڐʢ˪ȍĪȭ̝ȩoƛĖēÏġʂʻ՞ŷžٿˢɯǍуːȌΨSծ؍Ǜяòǿĉˣ²܅śڷͱɦɣǑωȎ̻éW٧ۚઙެ·Ҭңδ׃ޚ˄ҟज՛ܺѕʴӁౚݧдġЦǗňΟԌѱȮܭ܄̹ԺlʀͶш˃̠Å&quot;]],&quot;encodeOffsets&quot;:[[[125900,-11171]],[[124809,-10844]],[[126379,-10549]],[[122893,-9599]],[[128070,-9740]],[[118385,-8980]],[[125929,-8750]],[[122332,-8950]],[[126278,-8555]],[[119441,-8820]],[[127270,-8529]],[[126900,-8471]],[[142229,-8589]],[[120378,-8568]],[[127566,-8336]],[[130892,-8293]],[[125730,-8818]],[[134003,-8518]],[[121081,-8517]],[[118219,-8350]],[[132955,-8145]],[[129845,-7851]],[[130478,-7806]],[[141861,-8472]],[[134478,-8191]],[[135150,-7374]],[[131759,-7355]],[[123674,-7289]],[[116577,-7275]],[[118147,-7138]],[[107779,-6799]],[[137766,-6596]],[[109951,-6151]],[[123421,-6449]],[[115425,-5950]],[[135995,-5991]],[[137981,-5843]],[[136117,-6043]],[[104825,-5610]],[[126594,-5398]],[[124972,-5568]],[[125589,-5395]],[[126137,-4660]],[[136777,-4347]],[[126201,-4211]],[[131649,-3671]],[[131355,-3762]],[[119219,-3547]],[[119095,-3960]],[[129906,-3161]],[[109452,-3077]],[[132869,-2934]],[[102836,-3259]],[[110805,-3069]],[[102609,-2806]],[[102240,-2399]],[[129081,-2510]],[[129049,-1832]],[[133482,-1731]],[[127969,-1746]],[[138726,-1630]],[[111568,-1658]],[[108591,-1709]],[[126564,-1745]],[[131229,-1700]],[[126170,-1199]],[[112344,-1209]],[[138205,-1142]],[[101544,-1820]],[[134146,-1347]],[[138633,-667]],[[130356,-799]],[[133762,-541]],[[124790,-416]],[[144357,-2672]],[[106982,-342]],[[130629,-326]],[[130304,-507]],[[106227,-356]],[[133953,-4]],[[100823,-543]],[[107294,-180]],[[105764,555]],[[105501,765]],[[105907,1074]],[[105643,892]],[[106522,1209]],[[107096,1246]],[[104886,1014]],[[99822,1501]],[[104952,1495]],[[127887,1020]],[[104150,2129]],[[130799,869]],[[99671,2126]],[[131537,2102]],[[98779,2417]],[[111501,2976]],[[108299,2932]],[[108837,3233]],[[120483,3360]],[[128674,3519]],[[120714,4287]],[[110916,3779]],[[120397,4271]],[[129861,4131]],[[98809,5355]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Indonesia&quot;,&quot;childNum&quot;:107}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@̽ĥ̤ˬZȅ&quot;],&quot;encodeOffsets&quot;:[[-4517,55486]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Isle of Man&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ʬ@ĤмӼþʜόώeլԟ͚ƺ̃͠đUz­ƓíȘșKąuū¾ǅWǫ̑âʀ˵ɶĉɔÛʄǣaīֶɹĦ­rÓ`·O¹yiŕĿœāŭƛíƃ½ůBėoĻÁÏqėĽhƀěĈ³Ā¯¼Mbn|Î_Ө˃ָϿP¢r^¤YÚƨĝƐíƬ`¢[ÛpßҲůä^ÀjĖQǐ»èeɚĪŜÁɂãň¥£\\Aĥ¥юɳĐsɴČâWªš´Ǵ׎ǵ˄ĶɬǏłÂμ\\Ŭ¯Zz´ƀ¦ŜGèĸįƄS¢ƎԬFĀxAÀ`ŒjŶŶèȐï±СbûÊÉ¸SeķákĴǵʒũƺɈÏp¹ĐI¬YƮnư~êþŠͦıҠdŞÞ|@À¹źIƞ¨ĐP°K¨hֶӠ£ʨҎϬɢࢎƈՎ̰Ϧ×٢˿áƷfÙǞɵC¡ůdſƎԙࠩԵšƕRʃċjiF{şɫ˗ʽĩȱŴįǭϯĭƍëŷǿϙ͡ŔȗeŁÜ޳aũ£Ŀˋê̝ùųęǥ¯]±léĂçv·ĵ±[ÐÍ՘w¦đǎy˂ñφǝIÅ\\¥K@óRÿƷǻEȟǕ½įǪÝŋǕӼǄͲ̈́ŨĴ{Ǿǘ®ĴĠɸBĢp\\ŒêĂΙȎ஽Cб¬ɅÖ«XYpȊC͎ŵɬĉåmŃɕɩ̼ÉBfƉ{IɏƑȐůeåW®ďęĥƵƛȷ}̘ɱɢðƁö[É̙į@ëȏ¹ãBùKĕǛ]£M²ÝÈÃâsĦMƊěŦiæ§VM[ĭ[Éō˟ÊĽÀµvȥƢoy˿jǯŊ̛m˳ßBĐʅǋúħƇGΞĉĮµϱśƃŦŕǑÒŜϐɇȢǾɅ˯ͧԻƵȷƭĥɓŐͿȋ͗̽ʳŋ őףȏßHPǈɋŋÉƋɖ֝с֕۩ำ৑č҉йȗЏPʳӡ˧Ř̓ƹȫ՗łԃÉɟǎؑųȔÿěɾȳħ̵֟כƓ֧Ět¦šUܽѯÇׅ̿äț͢şγÜҷƏȓǵŏэҕʱϝȦљӲȓҤçЎŐ͙êEĥ͖ųƐЅੴٹৠӁྰεӤů˔Ō@Ƈƨ¼òŷ¤ǡ̄ԍᓶĆіřƫĔRȂƦkǗîĵϾȐۼãϐǅɈĤČķSоʐӍ­ƂɴƭHƸɌÖՁļåċȥɡƢāǓȩ̿ࠫΕʱDӻ̔ঁ৒æŬȎŵݴʌˀѢųű֥Ʊέöԁ˼ȉ͎̠ɾҕɉÍɔİÒĊnĜbĈAŚCHʨXxh^lNhIzDvìgÈ\\ÌcĬAǬPĬEȸěʘĺǈÌɎÀfQ¯p«ä´O¨Pbææh°C¾B~ÙŢL vwÎÏŔÕƞȍ̢EȲáÁiµGƷtƑǠ¤πǜէɌĈ̶ˠʦżȄĂż¤¨ƆúîCŠïÀƗĚ¹ÜJʼİ̞˞þfî¸ŊƲƚƐ̎¦°ҾɸВݾάƆÞÌ ¼QºÐbêĢîˤ̼@ŊÈļÚO]ýÖbÚºǢY¸ÑǄ`ª|®æÒĔ¸˨ŠÊ`ĬâŜWN&quot;]],&quot;encodeOffsets&quot;:[[[77130,33061]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;India&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@¿µáƠĆŏAƨƁ&quot;],&quot;encodeOffsets&quot;:[[74232,-7554]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Br. Indian Ocean Ter.&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ˋÄɨt¤÷&quot;],[&quot;@@Ňŭˎ࡛λӧŜĉӅñÙøࣽΣ̏Â¼űϵŽޣġǲǨԃãѬɰدÙδ˖ЗZÒӮőźɰŦ܊ŎǧÜƹĵحÅϜɆƔɲ̴Ģӫ~ӝƦsŖͬ²Ƴļ˖à@Ø˯_¸Țȣ¼ĒౖaßĘЬʚՋ͘ǪĒɎԜĢRʇ̌ͨ̈Ņɍũ˧˗̡Íƀē̩ƱјɩʂUˊɰ̜̇δ|&quot;]],&quot;encodeOffsets&quot;:[[[-10186,55208]],[[-6367,55387]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Ireland&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ȝȃեĝϜȂIŖѮHû}&quot;],[&quot;@@͂|ొٸ˜ʇǽƃǂȅʝƑԄϋɶrüқǰʑ߬ǋ͸ͣӰɫ࣒ķೠʸŮ@ȣÝʔ±ѴڈńǚʶКɰݠ|ƚƚنƈȱނʵҰdТơźɏԞʑɺ˙ٺLþϝ¹ǵČğTȻhÇE³ƋõiΓŇǝgĥã¿S[uTuvańŽȷYƁǱ@͑ôĻ˾é̙̯bťŒͧĴ̍CçƱCğHǻ|ƑYɎȢ{˄Ăą¸ǳEƅwçȋțȑȡЧщǈǏİķب࠷ܺ́j͵}҇ΐY|Q¼±HwÁRǕQ]±wcƟܙƥÓőĩXʃţ»{ƛuŷamÍ©McT·ĝqʡyë¯MĵÿؽƲŹżġĿߍƜ΅ÃȽŘ௳Ȧʣࡒʵ˞ԡ`ଝՙїǈҕ|࡛ԈǹʘϏǪχʻɤǻԂǏŨRǊǙìsɰЗтćɸѡƛѷʰǒŜȅé͕̻ƃËēȼ˅ưIѲ˥Z@ͰØǚÜǌīŢĻŸáÀƵʰfƏOҩ̰ǉĄálƻNgfYª@¸¼ôJ²ŁƼԻҲŪȴéɊĤŘOȌȲȘĶªü lÎŀşǞÈŲŦæVzė¢͡BΏǌķ˺©VD¹¾ʍ֞|ŰȃŨbɴ͇ǔȨΪŵªuϚȽҔ̮ǖ̆Ȗı֎էՔŇ&quot;]],&quot;encodeOffsets&quot;:[[[57537,27568]],[[47222,39811]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Iran&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ŗPģêɉũȳԼұłƻI±»ó@·Z©heɞyǊăҪ̯ƎPeƶʯâ¿ļŷĬšÛǋ×Ǚ@ͯ˦YJѱˆƯǺ˕ûqċfǳìƅ{Gy˭ĪзąȯϳŗǅÙóƋƍƧ൝Ŋ߉վ෗ਚഃۀğ˻²˗¢ҷèŮĴĜǥɣ࣊ᇴࢴǪ˸ƆܸµزĶŌ̺êӐјĆhưĸĘĦTĀÌSžӪşƊGƪúĐWgbMųä×Ü¢ǢĲÂE¾Ooʎ֝º½CªUĸ˹ΐǋ͢AĘ¡U{åťÇűŠǝĿkÍûķ©ȯȗȋ&quot;],&quot;encodeOffsets&quot;:[[46733,35404]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Iraq&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ߔźѫɋΜėŇɋκpåǱʴÈҤĻƿƏǦˍϏʙ˹H÷ɃϝƣݽťڵʻধŷŋƫקŇಙŲʝŌäĲȥÉуǨఽį¥Ɍǈû˔¢،˸ӷÅĒǜ̢Ĥџỵ̈ɚଏ³ǧŀਦƶݬDĦŞؕR֒ɂࢷŐ࠹ơӛİȒø͢ÛȡȨАćˤÐҟČʶɅŘ̀NeƂθǗ̠ƃƤGƊуŤϴ®ՍÔƠúѦBࡨͻʅʅeѼϧ˚̶̌ÅȺѼ׾˧ĚʶҌĞעϙŽΤ͠]̚ƭͮȨ˄Ý̔Ð±ɂʔÜɜQϊʉ&quot;],&quot;encodeOffsets&quot;:[[-15916,67818]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Iceland&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ǷÿGkcȋÉNå¤açjģlŅ×¯Ĺ¯ƫȹWqsPclMÐlØkÜÉɅŭÏȟӐĤБྣÍßփบĒìDÐƨƎ£¸NPǎʮβীʬOϨ̚ЛŁǷ&quot;],&quot;encodeOffsets&quot;:[[36647,33521]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Israel&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@Бٗǒ͹Ƶ̯ԣĢ̝ʲȥEء͆ѽĬǣȎʤ̨ƚů͜Ƃкǯ૤Ơ͊ŚàÏ&quot;],[&quot;@@µċ¯ŮĦ¡&quot;],[&quot;@@ãĪľç&quot;],[&quot;@@Ƣ͏ƋșåएыÔ÷ɳˉȗɼňՒŝàẦɿ̠ɘ̈Áր΂͚ȫbœ&quot;],[&quot;@@rŧʍzɜĮ&quot;],[&quot;@@ǰFgeqË½¥M}PmlYúLÂǁƘģģýûƸΟ@޵˙¡ǡʢɯɳȷŮлঘշϒݍѾϏՆʻ࠸ɛ͑ႮܛьηįͱɟĬǳ˾Ͽ¼ǹƌɃͿׯӾ̯º͍ҵǕÑ͡Чϻ˩EßĄȜӢˌŪ\\ƴѣࢤدȾEȘƳǘΧÍĶŊΓêʻΤթPϩȎ࠱یзĒvŪϫʹǋ˝࠘டЌٕҝљğŨͮˋuΙǔþа̛ȬόƠÊŢ̗̠ȘƺkÖoǖ֒ĔöȬŴîÈÀÔôǗ̢ƙP_£ÃƨƕÐ`ư̾ĎɶĂ]zBĐƧ¨SºAŰ¨Ćl°KĒĽS¢Teŀy¶xMnÂv®¦^¸LȠÏi¸W´PÎ ŊvSĎAĠOÐ«ÎeĊKÈPj¾ÐÞĢǂNĂ^ȼWͦĆxOJ[p¥Īċ¾Ù¸µú}ׄċƶ]ŜEǮgµ[×ƍćlė&quot;]],&quot;encodeOffsets&quot;:[[[15951,39138]],[[8683,40006]],[[8485,42025]],[[9864,41864]],[[10645,43887]],[[13744,47322]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Italy&quot;,&quot;childNum&quot;:6}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ފʱŞȧ˃¡˟ĞùĿƧíƑƁĲͿɵʞʛĪļƈ˾ØԦÃ&quot;],&quot;encodeOffsets&quot;:[[-79115,18901]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Jamaica&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ǻ¯`øǜ&quot;],&quot;encodeOffsets&quot;:[[-2067,50413]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Jersey&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ůįYӱŭɛÇԱŽɹÍɍÃ࡬࠯į³ǋāgcacãƗ¿őka׵Ň©ĥƑīƟǋŝǵŻऱŸnǞВྤĸْiƂdȌHlǸĀӬ̇ϒÏ࿦ࢲɤࣉǦěŭĳ&quot;],&quot;encodeOffsets&quot;:[[40085,32896]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Jordan&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ǩúĆƐ«ç&quot;],[&quot;@@Ɓƙ©öǾŶQÑ&quot;],[&quot;@@ƥS^ŜƈŇ&quot;],[&quot;@@͡ǭÁʑų·ɊԌǄuƂǸHȕ&quot;],[&quot;@@ĉNPƜúƩ&quot;],[&quot;@@ïåǝĺѴɤȥʷ&quot;],[&quot;@@ƩDµļĠÞŪÛiŁ&quot;],[&quot;@@õ Ǆ͔čγ&quot;],[&quot;@@ŝȂ®ãý&quot;],[&quot;@@Ĺ\\¤ɺƄhǛįġ&quot;],[&quot;@@ȔōǛwƮ&quot;],[&quot;@@áĤĦƲÔŝėŷ&quot;],[&quot;@@ķǘƺßř&quot;],[&quot;@@ķQĲàğ&quot;],[&quot;@@Ѯ@ƅˡ̠g£ŗżȡ˻Ε˕ࢻɡxƱ΋ȭø׈ķXĉŽ͓͙Ĩ­İŮxŴőƘN˒ϐѼţ¦Ʀʹ̄ģÓ¤ɇŶD\\ŵʉÎʉǙ¸żŭˮˀǫΉ͔|ĜȠkeĬҐǔĴǚȚĀȦ³Ȇɥ&quot;],[&quot;@@Ʈȣ¶Ô&quot;],[&quot;@@ÿlzƨļµƉ&quot;],[&quot;@@ɼ{ĐͿ̣ǳǏ̡ȉǜ˛À̅ŵʷѣơ÷ƋTÊŠǷ\\çќ͉÷Ԣ̌ʖ;ɐƋ͜ìlȐ̄ĖΆû&quot;],[&quot;@@č»ÍĄƜ&quot;],[&quot;@@ĝïƁü˲ɀÑɋ&quot;],[&quot;@@ıbƸˈÅ˩&quot;],[&quot;@@ōqĪö Úŗ&quot;],[&quot;@@ĳPrȾɈȦ¥ȫĸSȗȳ&quot;],[&quot;@@Ȑsֳ̰γưܥÛˋ̇̕á̟̝ÅūǃࢅΫݑʦыΓǷđˡѕɡc͎ɪʐəÔƹȽtɓǛŲȋiƍρȽȁ̘Đ¦ƹČѽѹթÌЙçǴǆʽ¾ûďtʬý^ɫ̹̈ȳuġѱū΍ԫȃÙȱÈ˙Ϣwʀˆˢ֧Ůб§ɹƿۛȋС±˿àƕУͽǶۓÛ{ʊĬŌ̌j೎ईࢶGৌȬŸȅ̔mȈĔǊƊẘՊՀŪՠЖŞΡͻİɽȖëɤǖڲɢӆՂДɊςڂɚزÏȘɅÆɨ˸ó˴̜ȼÂ̜ʄOĸ̫ǀĢƶ·ł˖ύÇDĪŔɄʖŏ&quot;],[&quot;@@¥ĴńÝŻ&quot;],[&quot;@@ų¤ĀĐŅ&quot;],[&quot;@@Á¿ǒĐŏ&quot;],[&quot;@@ݠǁռͲȕ֑ǚ̡аìމ͕ߝĳґϳǉΗ୕ӠύΝǣɵǴȓHŻɟۘЧŵÉ˷àɱʟʥí÷ŤĦ˰ɭ̬rʮӔ̼̊ظĻȤČ͘ৠƫ֢ìȶɪĞߒ۵߆ҭ&quot;]],&quot;encodeOffsets&quot;:[[[126862,24863]],[[127277,25105]],[[128455,25337]],[[131337,27293]],[[132095,28387]],[[132560,28886]],[[133758,30990]],[[134103,31127]],[[133511,33202]],[[133205,33004]],[[131754,33571]],[[132175,33629]],[[132600,34021]],[[132911,34559]],[[134323,34410]],[[135441,34760]],[[132383,34943]],[[137583,35079]],[[137577,35312]],[[138172,35112]],[[132491,35179]],[[136572,37073]],[[141665,38730]],[[144619,42366]],[[142829,43091]],[[144687,46203]],[[144459,46421]],[[147277,45176]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Japan&quot;,&quot;childNum&quot;:28}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ķȤøÍŖøĤ£ǲ»ǢŸłEŶRÚ^́ǋɉŋĵ½&quot;],&quot;encodeOffsets&quot;:[[78898,35953]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Siachen Glacier&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ǁèĪŨÑŏŪÿ&quot;],[&quot;@@ѝɑѩڥťȉЁŌ։ƟǅחȝĳŢճCࠣǺ׷೹ʠƝ÷ʣɋĀˑ·Ʌǂ൏˽ƿĻԢƙŃԯβ޻ͩıŰƛ˯śNқśĨűĢγ½vȍƴĀbᅛǔ˹řUӝTûR§GěđՓØ۳˰˕ĝˣŉęʥyğÒƹåVă¢Ϋ´ďÞǭɣâџÄȷ¯û`Ɠ£̧ͥ®ûທەӍңWɇɿȳźÆȂƩƘਏcǯۆЩVúࠢʟħʳζӹͼϳƍਡÞ৻ŗࠛݸᏟঊᓡһBᶡҗsӣ֚؝̶ࣃƿҿ̯ĒࠖוĠʁʐˏ`LʶЃװнŐáŖƂƌ॒ý҅͠΀ξຈuΩȮ̤ԴÅ֐ӱŔ́Ƌ߭ʀકѝҏÛīƳׅɦbŶͶdڕ޸ֻĄǃÁȑаͻưͤˢ̂ȕǼòˤҒ֊ɶjՊѩΤÐőֺזȪƦȚؼǦҠτ̶çƲƟ݀Ƞ̐ȑ٤@ڪχΒщòЎ࢚έڲξѨβƧͮǞѨwѲ̳ӎ×ÐŅʐöȸɦ̮ƝѤbϔƒƔ϶ࣹ˜ιʂ߸ͺȃ˶ɰʠ࢈ΡȈϯº~ƄʲÞұĊɄͮזÓᒂπՄ͜ʄᖮ̔¨Ƹ٪Ȕ৤ȏҲŤϖץý͗ފMƴĶɖ͑ƨǊԜƩМîͿ˭ĎɓϞƠвōČƆ٦ȺǼǐ୴̒ƵʟȝNÂŇୀهᅂᐳπƞrȦʌĢͤđ±ȇˈWàǻࡸWɤƒԄĐӴȁ͆҉֖ƫȲϏߖĭдɸ£ǵגБ&quot;]],&quot;encodeOffsets&quot;:[[[51389,45932]],[[89419,50264]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Kazakhstan&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@Κi²ƿk§mŽNţɒ˷ݒ³ȾƁڒяŢćŜ}Ȑ[ƀIݘťƎĸŐƪªĆޢΠɌǹǚħŶDĠdɌ`ŬAɩ͙ɭ͛̓͗^ᶻɪ̋ƬȕĂĻVĹɟȿ̓áPȷɇɧΟůęҿɉ˛̵ݵɥǷഩ৐Ϟḭ႘নǾδɀɚÒƦˈǞƬЌBŤYǚå̘nÀϩָǎO°ǌGŁďäj´­hſ˦ǜǘǠǜɔɊȨȠǦǞƸƲ¶Ņ&quot;],&quot;encodeOffsets&quot;:[[36174,5494]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Kenya&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@·ƭé¬¿¨ɛ×Ūȓ²\\Ú[zl֝ǫʡǊৡ¿«ʪúz¨¸kÈTIÒE~мƴՐȓ͢ɾ˂͜œςʌɐWZŴǞ©ѺʬЉʛƤÍGåsuXKþa°£\\ÁmÿnãPiĮÅĒ^³tôwO}Hŕ»¹AáWǥ_Yʁ|ȿÔŃƨҫƞ֨ϬƦ ǒîHpgjçā³ec­ų̈ͦƔ¤ü_ȸ°Ͷ½ĪEɤãǬĒÝά³Ą¡æUÑƺzĠĚʦˤŊ˖Ğ۴˯Ք×ĜĒ¨HüQӞSŘV˼ᅜǓÜġþ»Ôµ¼ÁвÏŲġŜħŉWaeUʳcÍg×ą࡯˵Ǘččãa÷ȇǥƕsšJăřԁ á_ëīƏ¡icãíćŅë¹Ý»â͗ŅǍFĹˎDɽŭŉuęGśÃÅ|ċΙǇƙƁcÿ«Ã¯ďy£iyH£ěOy¥ěuë[ƉXéc§}ďŁYϿr&quot;,&quot;@@ćXÍ`]@LgÐÓ¬Gø|&quot;,&quot;@@nƀů³ÎeFÁìăAaå¬SüC¨R&quot;],&quot;encodeOffsets&quot;:[[74384,40332],[72361,40812],[72916,40850]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Kyrgyzstan&quot;,&quot;childNum&quot;:3}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ұȲʃđĮƴȆǃɎƭȍǛOwҠƩ˂]ÉǓ͐f˲ɋȴƍݞǮt̨ҪʒǐೢĄʜǛ¬®²\\TFwl¹·ĖùƴǪÏüĝÖ«ƌE¶ņyàûŖsä|\\Ƃ`t`ôSòWü¼°Â|{uÈÔ««iĀ^rC°ÂS BƸƨôPĖŢƿӟɰׁŉ΁֓ħĕƱљ˙ʉ}]ɗͣÒŽĻJ˹ʰɍFȱʻÎćł̋ùęɧÈBǭǑƕΣĻ&quot;],&quot;encodeOffsets&quot;:[[106933,10662]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Cambodia&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ƔĭͷƌŤ¯ÒĊÝâĶ³iĥ&quot;],[&quot;@@ÄŃőÞÎ¦&quot;]],&quot;encodeOffsets&quot;:[[[-161118,1901]],[[-163163,4018]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Kiribati&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ƉöƠŰӂ°yƣҝı&quot;],[&quot;@@ģÖȆĎġƣ&quot;],[&quot;@@ƑŘÒ ĀƷ&quot;],[&quot;@@UćƳvŞȞË&quot;],[&quot;@@ÿ½ƁňƮŤÔǭ&quot;],[&quot;@@IōýfWǘĠï&quot;],[&quot;@@࢚ೃ]ࡍƚCŹҫ˽̿ӅkÉȗ΁Ŷ˓ÉBȝʽĐÚǓŻƋŵêÖǬ̋ˇţÖȇǕɣ̠ɖrÌńơAŇˤ˔ΖĿÜɞȌǳʜ«ѸʳCiä˜Ȣʢ·òĽĘĪȗɊĥӴϦфߖr˰ˆ&quot;]],&quot;encodeOffsets&quot;:[[[129359,34021]],[[129264,35196]],[[129201,35565]],[[131140,35642]],[[131831,35634]],[[129558,38643]],[[131456,39551]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Korea&quot;,&quot;childNum&quot;:7}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@āYĉǀĔưƎǑÕƃ&quot;],[&quot;@@٫SȧϨݵĚƌƎÚôŘǆȰϴиĆĠiȎÿvŭŚəƣȹȉˢ͢ڿ&quot;]],&quot;encodeOffsets&quot;:[[[49434,30336]],[[49606,29228]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Kuwait&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ϤЋâȓÞDxödRŒŁĉΑÁȄʻĚ©Ɇ»ƠéϺȾĀżýȠƣ§û­sÑrcĖUĺJ`ÁlgŲEñAÃħĩYÉ·çŽŕOʉØǓMEe{çXå¿ă¯sI੊ջAµĵxù̀Ɂ¼ÝÎÿĒȷˆ˓ɚǕÄÕþšÜ£pÝP±ZƛĢƃêªfUıϸʹGû}ƟéoĪƷ¸·Ȏƙ¶å¯gÅÑ½ÙÝrÃjU­Jĥ­§ďOóƷƧAT­ÁqDÿ]j¬Ó¬Çv{|ɵđós_Ɓ_{[tãþŕxßµŅƋFÕ¬ûĞǩÐƳĕú¸mºCx¼lĊ¤ä°®¸l¼tɆpöYĠð@ňŀȚpĈDÒeȉŊNƄÙ¦Ƴ²ďÊȓʲËƴMȤ`Ǌ´ȊÛƊʽȦėİŃƢŭȒĉĒ§oęlƍÆšķJß]EauÁg§µëğȳé÷­JygK`eĀÿhę¾ǡƂNÇñóÓ³fóŧĻËQQšÿȷȁ¿eǑĔȢҺMŦñĶEȪ҈õ̎pƆQ¾חJīǠĺΠǝǪċßÿsXPºN²°ǼÆŠÜÆèzƂB¶IhËJw^ÐƔɒ͆Ǽ¸Č¶kĩÅQÃZ­pu[ƌ ĊFƌëpN²¢bPÝĒrʔGƠM¤ǱΪnªªªŔrRlIæđƸ¨Èu&quot;],&quot;encodeOffsets&quot;:[[104579,22917]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Lao PDR&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ϧ̙ʫPҐ঒ˠ͌΄z¯ƃƦÉäǯʳʝòï͇ñ¤ƕƓŹ&quot;],&quot;encodeOffsets&quot;:[[36730,34235]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Lebanon&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@àūìЭɛίʨƟʲĀ§òǑÒĳĀWƴÇ°ʓƻՑV˿|ȅ׵Ȫܻ϶१ࡰ࡝ԢǹȀȪ˜͞ʲȘȄÞʾ®°ƂÀÜʠ¨Hðê÷ʂĜɜǇŰգÿʍ̄ǗȒȘΨƢŉ&quot;],&quot;encodeOffsets&quot;:[[-8690,7740]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Liberia&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ʡˏĞտɏБɶࡥ@᳿@᳽Aေ࠽M@нủཤ↏Ⴒࡉϕٛ̓؟Ҽౙ˴ϯڞۑȦʑÅşĘɉخҫؠɢ͢ʠŕךƘϤġୢе߀ǬĪ͂ƄņżƀǠďֲƈȆǜ¨ŐǌǾŶƮüƎìǄöŮÌ~ºCªãİ@ŞLĬPÌǼŸÁƀsϼȟЊµѾĨཤѯѼ߷ᅀн۶їϢűӸȈͰЌƻܖǐʹо̦ࡠ̚Ҩeݺʥ`ʋƲı۾ǡؾsɮˡ&quot;],&quot;encodeOffsets&quot;:[[25755,32415]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Libya&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@³ĕķŰƒȒZɫ&quot;],&quot;encodeOffsets&quot;:[[-62356,14154]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Saint Lucia&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@|ÙſŊń¯&quot;],[&quot;@@ɪaϬίѠܣŪ×¦ʃϞܟY͙ȋЍލϑϧ~ƟŦȣ֪ũ଒ĦɵŪ݌ƜʾY̰˼ą͏ƚÁƎ&quot;]],&quot;encodeOffsets&quot;:[[[81792,9268]],[[81902,10049]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Sri Lanka&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ɉkɛ̓Ñęʭ͝˒ƛ˴ŗˆȦĚψӢȊÈŀĀŰàȪðĤlZ֨ёîȕĹ±Ŀŵőǿϛǧ&quot;],&quot;encodeOffsets&quot;:[[29335,-30849]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Lesotho&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@µPǸˤƁ˳&quot;],[&quot;@@Ù~m¦xʁßÉ¹ÅkƩXuĵkoϙçåx~Ս×jǠë¶ñĥédJwfépÏLµïŖHÐŠʸɏǀгJ۱ǚDǆƧ̞OǮO ɦĲ˶ńβüڔUþ_Ú³ÜNÜަđڂŒƖǓԀăްοCqÛ¡ĉ¥ÛW{qƼWâY`iƥţʹR]ÙķçŇ_ėwŗǛTŅMuyÃÙ«éiTiŪeÀĥǉ&quot;]],&quot;encodeOffsets&quot;:[[[21461,56606]],[[26187,55440]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Lithuania&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ţ̃ƍ½[}¿Q©R}nyZÝ`YĐɼ|¨¦ÐĠîĨYjNEMïz»È·ÊyǸõ&quot;],&quot;encodeOffsets&quot;:[[6643,50994]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Luxembourg&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ӑ́ѱϫƍޯπӿĄƕǔځőʵÆԯÛÝMƕÔړV̓åÝU˵Ńɥırوքغۚź؞Փ̢ıؠɼ¹ԶIĄոžƌ­͘õ՜ˍȠÏθàȄÏŞYŤCÎÿɐħoTO«Ǉ̋Ɩl[ĥĬşĄ¯P¸ĻnÑT±­į&quot;],&quot;encodeOffsets&quot;:[[28824,57491]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Latvia&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@řŰƒ࢖Ɨ˲ϩ̦Տۄ̥ĘlǨþ®_˞@˒Ěڔ˫êFמƵTЋːǓĮ˟ŮåƄ¯ÆĕOċUïǨī±ǓcS͇ĔŹZå÷gFGł]fFƿËF¿\\ÕÀĥ£qÝĉÑġSí½·ėµÏÏNŭǁg]«&quot;],&quot;encodeOffsets&quot;:[[28890,46542]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Moldova&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ĥƷǘ͠ñǧ&quot;],[&quot;@@ŉkkŀĲÀƓ&quot;],[&quot;@@Ͱ՝ʢඇȼչɱәǁƄŃ̂ȓÃƦ߷Ó˟ˉΧzփīο஭₵́గ͋ލϗ̥Ӎãճ˩ʫOছӚ̫אª٪ϧ६tϜǰӜʤƪԖ੎дǭ̔KˬǋϞ»ݬϊׄ°Тζ˄ȊĴïɌĐƮϪÜȰƽËǰŦǚϼʚƂǷMʆɔ͒Ħ¬\\ʝʞ̺ǆǇʬȈΆĥź¶ŨĊÈǺĻҔϞļάŏ̲Ūɲ̠˨̑&quot;]],&quot;encodeOffsets&quot;:[[[51135,-17308]],[[49503,-13684]],[[50728,-12730]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Madagascar&quot;,&quot;childNum&quot;:3}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ōAɼìŭé&quot;],[&quot;@@ƾǸöƩɳ&quot;],[&quot;@@ĕ¥ŘŘñ&quot;],[&quot;@@zĥƉǆŐß&quot;],[&quot;@@ȩȴŘиύŚʝ&quot;],[&quot;@@ĿƻǤêg&quot;],[&quot;@@ƵĴɞÂʣ&quot;],[&quot;@@Ûȣȡàú̚Ŝèȡ&quot;],[&quot;@@˹Ɋùɠ͖ɩȿ&quot;],[&quot;@@ѫ೑ƥཉâͻϖҕÿʓtʚ̵Ϯӊહؘ܇Ɣѵјҍţ^ʚŇÿÞҎÉ͒ƽ˶̇ނɜ֘όǨϼ¼ƿ͊ÓɒƘËɶÿUזϲ͆ǜǼŜࣀ҄ɠଔʜϬَƁÀČƱxˬfǰƝªɩŻ̩еұi̳ȷȋéȄ|ȟșFÿż|ɕۻĵƟƣɂr˄ɛ̯ȑuʃЗ˝LyſໝBGӁǟDǵBθ͙ɠƅ¨ÝtÇ@¯¸Ėy®£@÷SĉZ÷ÙCƳ@ɵ@ϡ@ʫAȃ̭ĿǩĕƥĦȹqs]ÛΗඳ౐ϩȚ©·ΦǧևƶØĪǟyËŎƋšȆË˭࣡Пԁ̓ƸӍ¶ٟ˴ȯȖޭƺঁКْ࣏ٿĔدɚЃцࡵИҗ֖ƿΆΆǌÇƦƹ²ɲʼz̸ȇņǽ̴H˶ūʨ॥ੈۣӺȨĥ^ňρłˣϼȖ]թˈùżȭ³ŤɆʻšǁŔʲȎɮê«ƅʀǧƪɫOǃ̈́ηźǷʾÀˎӻĔ࢑ࢪݫൎXѺӝƖŕǲǁÒǛĹڅͦŦɇýЫ˨॓ڜջɌχʚŅĦʉȈóŘԉͼʩϼ܃ƎćăʤȎƟɺޗԖޟxѵʖȭÂȪʀƑ̆љɌƳÙˏѕɟ̙װ૏ߜĳ[ɩʢF؜ʵբե̴œ̦ĭŽ˛ÍȱȶԓɄāǴϡʰĚϼ·ɨöCąȜčõȴě^Ǿаݛިإͼ͙ࢢȟƔȜˡ̦¹ƜĐĮȑŬɽҊ፺ƴġǧẘষᛠJFϚ๠WʢˉচگЌ߿ͦʓߊ͙ɶǾɸҊ̄ĴۢāּԁϪܕڔٻ¤Э̊ԡผәȖø&quot;]],&quot;encodeOffsets&quot;:[[[-93884,19126]],[[-89026,20791]],[[-109058,22130]],[[-113220,25604]],[[-114746,25135]],[[-113766,26646]],[[-117934,28744]],[[-114895,29702]],[[-115871,29750]],[[-99477,26585]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Mexico&quot;,&quot;childNum&quot;:10}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@аˏƖɇó͹ōI·ŹķġkʹǅwǵƱŷ¯©wԣeɉàȃ̂ÞԎƆ@¬ǔʂĎȐÑĒĶƠxB@Ɇ²ѼV&quot;],&quot;encodeOffsets&quot;:[[22881,43330]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Macedonia&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@Nᅫħ՛ɹտ˕ǿ_ŃύÒ·ïෛÍ̑ʑؗÏϟŮѱWʏȑޣ̧ŝʍЉºʋɷÝʫʡV­ͅȍćΛȀǟăƫƿĐ˙ɇķª˭ɩɗӵȻϝȫ˩ԭ\\řMų©W¡ŃĥéNķºEd¤úD~¹ˌțƁçtõÐmoS±KÅnĵoɏMÇǗ̱ǔɵòˡɝaƆɓƐÏъˡfɤ̜ΡʴHȾȍЖ̏Àǫͫȍѩƶιˁȉʴ̹ǅǓƸĨǦAҌȵάǑ­ȇˊĀȰ·˦ǫɄ«̎ƨÁpjºɘԶìòƤŀ WюЋɄɬي£жîAĮl¢Ú°`ŵoẀKŸڊűƆĳńyȬyȾyȾyȼíظǙฮ̵᨜íظ³к{ȾuȒʴ@ˠ@ˌBی@ᝀ༷᣾ၭjʅϐəØƩௐѹŀσŕʵȤĭܺƀ&quot;],&quot;encodeOffsets&quot;:[[4330,19603]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Mali&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ŉíƀǸĿ&quot;],&quot;encodeOffsets&quot;:[[14916,36714]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Malta&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@Ã±ƤƤğı&quot;],[&quot;@@¾ǳǅŬňÈ&quot;],[&quot;@@sǥÿz·ȌƬ&quot;],[&quot;@@¥ưŦŅÿ©&quot;],[&quot;@@ÁģÁÊń&quot;],[&quot;@@ĽũřC˼Đã&quot;],[&quot;@@KƏɤ¦ē&quot;],[&quot;@@ÑHĀĢmĩ&quot;],[&quot;@@ÅćoŪǴǲĽɓ&quot;],[&quot;@@ā¬¾ǘɃ&quot;],[&quot;@@ǟƸɎC­Ƴ&quot;],[&quot;@@ȚŉąũKĥƚÐÂ&quot;],[&quot;@@lřčǒâ·&quot;],[&quot;@@ZăĝɐĄƋ&quot;],[&quot;@@·ċͅǻõǉi}]ÏxÌIJgµƁAçyÛÅÅş¯ǻM±ĳÀ£ÃRƛĉɗxǳΉ§ƃ˛қë̙¼ǕʏÑܹ̹ÏɒȑØб؜ۑȆթƦò¬ÅÏƝȍŋֵ̭ƏVȑ̲ԭӊե[ֻʀЛǮ٣Υ֧εύ¯ЃŝŽćբǮʼÈԖŔňȫf¼ФąjàĒđۂ̿ی§˧ÆUϖǅЮĠ@ǧǦďࡢŁŨŢҤ̍ƧӔ̉ʲ¶̵ťˏ˫ǣȯɚŖ˕ҽɳ̽ϑó˺ƛɫȟO¥̬șɹԜɗΗǽß̬ಬΙ঎ÚRƧŸqͨĭ͙ȉńǳ˾˨ŋƤǞ͗ˮĄŘϩƂĵǱŅǼÆʬȧǙÀƎŽȈYɣͱиŧфŶŬʨőƊUЈOĪźB¦wǌďĚǦúŴé̞ŀˌŪ¤b ޴łÛȘf͢œȀϚìŸĮƎǮϰųİĪȲ˘ʾpŤàØ°E|kjČQʄŢƖࠪԶԚƀƍŰcD¢ǝɶeÚâƸò¾ʚȆĖjŎÚČĚƀ¾Nϴ˥ȤՕżĚǖëôڋ­ԅķĭüǫ˓ɷǅ_ŏɹǅç͍Żā©ʃƪəťˋծǚԼVƃǻžɽηҰĹöğ˃۫،ćpɧǨɷϨQЌʄºƿ&quot;]],&quot;encodeOffsets&quot;:[[[100539,10172]],[[100567,11216]],[[100920,12027]],[[100881,12191]],[[100420,12688]],[[100776,12901]],[[100675,13414]],[[97081,16199]],[[96745,16329]],[[99917,16644]],[[95940,19133]],[[95964,20028]],[[95736,20370]],[[95243,20403]],[[103567,22086]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Myanmar&quot;,&quot;childNum&quot;:15}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@Ϡʉ֢˯ʑÉTǳɳÑőŸ̽ϥ¾ʭݿ׈ĠæáŖmǈb|z^Ŕ`CĆ¬ĚÚ¬ĐÀìM­¢NTÄąŞV~p`®Sª]TªP|Crë&quot;],&quot;encodeOffsets&quot;:[[19680,44493]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Montenegro&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ܷ˵ԛӉߧˋēcշkџ୵ƅݷʛҭȇįå×Å¡ËiНÂ@Ȁǋʵ£ʉ՛ɊлðΗÆƷ¸ˁʆåpé^͹ZӕÆε®đNџğ቙ȆۏÍѳҲ˫֬ǙðrȨՙÖ৑ԀؓúǫqŽCɁvţϏP҅Šơkǹˢ˸іIÎ£ÔĀØВÙŔÒÏ~ëfǿʀÑȂßþa¶clĹtóÙŎÍR¡ái­FǻƬçrγuÛ¢­áZſÌę¦QĈ¥ÈēhēÌˣêäŸȓìõøŊĴ³äRUĸD¬nòÞǐφǖâXroUĐzÐ~nÂŸ_â¤ĖØdSƼΆǆԐňº ɘĠǲÈVNØC®̜ƠʦCôRƎƎÒ»ǚī°I¶xÌÞVîWƌƣ॰¡Ĕ˫ɔǕ¼H`ǲ@ƴĝΊoҘòȾć֞eȈŵŶVȖƜΐĒȺʎ|ȚœÇ£ǡ˸ɸоҌˊɆˈࡺ̥ĨeǐMȪGÊY܂ɕǄ^ɀʔËH«cTĝµjȃĐģyŏࡠ͓ˢ¿ø`ânɶmરːۮƛŴ\\ǦVŘ_ȖĭČġĒ­øĪEʆGʈ¤ʙψɏĬ¯üeԼXǼÚu֞ċȔ¦ʀÝĲp̈́ŚŎªþ[մèΒĞǠsĞbĞŠ¢ÜÔĖżÞńÊņÆ؊ɢϐɖăɬǃøÄ_ƆSňKàtŌǪºèCŔǚµŎąܥ਷{ĹJğUćū¿ĩ±üɋʀƿĄræàƀÌðD¾_ŔIŜtĞJŠa¨aĲ}ǺŝÆ]Ζ˰ؘGÎļķÎÃĶŘÄՊчƾʕƻĳkïCūnţYƛrǡĆħt­[É¯×TËSƧXă\\ŷïWˣůǍÐĝC_[čBo{Ћvʝĉ̋ͷ`X¥³ѡɿѥËȱWƱƭ{şƿɃŷñáǟÙȋŏÅcҍÄ˽ÖğćĀó ʣJãfœcзבѾҫ­œ&quot;],&quot;encodeOffsets&quot;:[[114564,44729]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Mongolia&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@èĞ¦Ïō&quot;],&quot;encodeOffsets&quot;:[[149250,15497]]},&quot;properties&quot;:{&quot;name&quot;:&quot;N. Mariana Is.&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@MˎÃȨfɜĥ¼఺ƽӌɇΈɏࣤŢĒࡂࡄÛƊŜАр֦ǷԄÔʈųƎʘӦĭఐÒƞࡏʄס;ڡz̒Əո᠂ࠒκүبŤŌơחʛҁʂЩ;χƮśƯº£ÞGÒZdlSʐ§ƚ©ÆU\\ÚƺĮǸȬĠ| ČĐࣈuzgǊƁǦǛɞħŢŅƌȝɈͷǤÇȆEĜƹߎȼЌ®ĐƖZŐEȈHȤQðkºFÊhżŊłCƞéþÑ`½Ī֤ŞͦťƚƸĂǐʊӒĳиȸۢɊƠüЌ̚ŰǓĿēĢÅǍуň֟ЧĀţť̇ŎCvख़ĶûÍ˗ňİÎʟȏͭũ֕ߵǋÍ®šٓҋ߃ɧݳйʱɇ҇ٵş¨wţ͍ōݿۍʣĤĚĵ§յɸ˩ʊ܁¢طÊµÖ˶Öŏ׷ǣۭƞu©ȭлӭၽ۷̷ћɒɛĘƺkƙӟEe҃YŹzñK&quot;],&quot;encodeOffsets&quot;:[[32884,-27483]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Mozambique&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ÃćĐŒƀ}Ƈ&quot;],[&quot;@@ŷډṿL³ƦSk£Bĭгíً¤ɃɫэЌʯǙËƱȽűǅ¹oiʭŦ˛Ȱ̵φʯЦ̅ĨĥqγζׅĆٷǉЃ ǝ˝ěmƯá@ϖÔ˄ζઌƵबʧ̞ǬŴŝȠيȁΦǉeɇϞĹ¥ȝ_þČβพD६BϪBȖ@Ȗ@Ŷ@QŐOĘQŢSŢՠ·˚ĸưŖöƀĔĴà¾hƾx̌ŲNц@΄@Ҝ@Ŗ@ɮ@΄@Ɍ൞@޴@̼@ƾ@Ǡ@@Ī@Ǝ@ȌAȎ@ǖ@̪ἢኑۋ@ˋA˟@ʳ@ǔก̶ᨛǚอîطzȻzȽ´ЩĴŃŲƅ&quot;]],&quot;encodeOffsets&quot;:[[[-16766,20180]],[[-5488,16674]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Mauritania&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@Ó~ĖÁ&quot;],&quot;encodeOffsets&quot;:[[-63640,17143]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Montserrat&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@˩¶ĈȲȮǎŔȇşɭ&quot;],&quot;encodeOffsets&quot;:[[59035,-20976]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Mauritius&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ŏFƕYYÍȻЋƺߍFěÈȅ͸ǣȞɇņƋĨšǜɝƂǥȃďࣇċğ{ȫĭǷÙƹV[ªÅ¨ƙTʏckÑYÝH¹¤ ưƭŜͽψʁЪʜ҂טŋƢاţЧՄƕËƷːŃĊʠ̬PѰҌ̔ƟóǐªΠÑɰ\\Ĥȸñʲ̴ʤĝƌ_QĮǻǔtì\\üďĒďžŷeÙǸࠀəĚƦ˚ȣȾёĈҩ¹ʍƔɕĮ« Ínī&quot;],&quot;encodeOffsets&quot;:[[35799,-11856]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Malawi&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ßnnˤ²̑&quot;],[&quot;@@û²Ėŝ&quot;],[&quot;@@ȡa¸þƪÛ&quot;],[&quot;@@ćW°ƺþµ¥ī&quot;],[&quot;@@ÐęƥăćžǞ &quot;],[&quot;@@ȪÏǎʹӀϡˌҷpྕ̼̑΀ܛ˭ŕrŏǰTƙʟIǷĵĻǼՉʺளࡼJ̲ӭ״ä´Ʊ̎ɫഢȋϪŤȮìŏΆ÷ĴǷưEÑЅŎőϊɪĺŇǐ ȒΖ&quot;],[&quot;@@ЉƖӯջmƳŽȋঃǩQŇŋɕĊģͣɭɩˋѹԟcɽǕԭǖÁŐϻOʑĵěʝɧōשԃǁ܏نīʀúŎȢɛРܾ˕ǍƌȪӨ¹ȪȢDÌ̤ఎΚ޾ࣨŞ̊Ӹүƾ̘ÿ˚ɾƴäѓƸųҠȠưƈœːƺǄŘÏŘæܺନĎų¿ȃ˺̨Đ{ÄəˆƑìƋ¥̉ţįфƚĦǅƱÙå͊ČȰǵՆƯĕůʳŗշÙƇ̈́˛[ĻґŇʽþĹơ&quot;],[&quot;@@½«aŨǚüFŋĿ«&quot;]],&quot;encodeOffsets&quot;:[[[114063,2474]],[[106723,2798]],[[120714,4287]],[[102696,5422]],[[102245,6621]],[[104552,6393]],[[120397,4271]],[[119954,7341]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Malaysia&quot;,&quot;childNum&quot;:8}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ݨƈϪɦ§Ɏȋ̋yͅșʋ|եν͋ϰስˍJᵥࡃFᙵ@ᲃ@šυĻȏƃÉƙë܍¬ܧǂċǒVȜƝŘōĐĻµ·ùmŋµŇŝíؓնͅӤǝ݆Ɵǆŉઆ˯ۨๆࡗಂʁؚ׭੐ֵިɀRфƈnĤ¸ǘĘEPǄMՌȬʠËҔ̱ᅌfሼSҺ͹ਨ»Ҫſೠƶࢴǒ&quot;],&quot;encodeOffsets&quot;:[[23942,-18064]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Namibia&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@č_@ĈĎç&quot;],[&quot;@@ņ]eƝŹsŷȼƤ²ný&quot;],[&quot;@@˟ƎÚƂĴőêȰYĒΫ&quot;],[&quot;@@ȞٌХЄл੾ەxțǑ­ʱĶಓ߼ُںğ˶Ťĕ&quot;]],&quot;encodeOffsets&quot;:[[[171566,-23166]],[[172044,-21944]],[[171419,-21668]],[[168144,-20731]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;New Caledonia&quot;,&quot;childNum&quot;:4}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ǠఉΦӋgȅ͂͗ȓωɕᠵङঃޛଵ¶ȷĎίƭEēϝȅǻĹǇȝ౉ɺЛȷ¥UӍϫΏVϛðʛŸ̡Țŝƕ^ؙ˱ɅĜщҨīJ̃Đ̅ĜÛ[­mĵáӝqѡɳǙֵʧȵ©۫ڑׂσƋp˙ˇΌźƂķȢґÇӟ΀D˖ǲMө̄ǁɦɰǿɄ®ΐؘÐ̒ʒොÎ¸ðώÑ`ń˖ȀɺրĨ՜Mᅬഞ˰൪୨␤ᕨౚ˳ؠһٜ̈́&quot;],&quot;encodeOffsets&quot;:[[15339,23549]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Niger&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ƇoòŎÖĝ&quot;],[&quot;@@Ɇěؚ˲Ɩ]Şվ͑ϜïΐUӎϬVȸ¦МొɹǈȞٮ̀ƮF˜ϑŎƯĄϹtƓô÷ȸ·Ďŭ¹փ̛ȋ¹gïGÙ÷ÑǉɡƏɥķηŧœÑЇɧř­ĻÍΕqËŉųȻÓýƧßŗǻ׋ǧȳÕĂŽǡƑÝ¿{ǉͭɑ¡hÕȬßẩʊǉƻĵAó^ilc oėÙƏı­go¯ġÅıƛħЯсʁܷǙˑɿƶº̋ձħŊȷěǩƚàǝșĻŽˬþ̏ȑ­ŖsœʓPļćŻǟ¼͏ʸŝʤÃƸþręCŤƴŘƍÓƽŎɎàŇĄǷÇɃ͔ί˔ࠗâɢƞʋÕāŅՇw|ȎdÈl¦k¼kæUńôK˞`xdlBçݨÔ֪ɨɾאɸȎͼŀRÀǄßƌʼk±´ŵǾFĖÂŐÄÎÆc٤ʨȶǚֶѢɴӞrĶâ®nÜ\\ڶǵъҧ&quot;]],&quot;encodeOffsets&quot;:[[[7476,4525]],[[6968,13423]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Nigeria&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@Ñōǥ§׷ʼɳč֥ȴƇŃྦྷེîàƊĹò¶ɺZ¦`úǺæ\\ÂJfz«˔OÂX¢tbľXȜg^ĀŊòĂ¾¤Z´íǔķPhNLdE²¤¨ЊˢŲɪǖȒǸűĞwݸȲĊĎĸɐ_wqÁĳÃöÍÛĪÝĤ΃ȋ˿Ż֩²ރĭ¢ɈƉǱØБñ½Ǖľ¬Ƶǹ˻Ȏ͏&quot;],&quot;encodeOffsets&quot;:[[-85649,11180]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Nicaragua&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ũVĪĚį&quot;],&quot;encodeOffsets&quot;:[[-173878,-19541]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Niue&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@£ħīɪƐƁ&quot;],[&quot;@@˗ƭЁçŎ݂R&quot;],[&quot;@@łù́¼ɀ~&quot;],[&quot;@@ƩƪŮ@ĥ&quot;],[&quot;@@ٷżʜ²ѾĿɧŀƮ\\ȣǚҊоʊՎʖhЄʸѾŚو͎ƃƑՍ˓ŹʌëʽʥÜħ܏Ƒɀ̑ËʫɭįǆĿ¯ŻʥrĒ͆ӧłƷǆگé&quot;],[&quot;@@ŕLͤɍ©&quot;]],&quot;encodeOffsets&quot;:[[[-69842,12437]],[[4328,52620]],[[4044,52982]],[[5004,54345]],[[4328,52620]],[[5454,54668]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Netherlands&quot;,&quot;childNum&quot;:6,&quot;cp&quot;:[5.0752777,52.358465]}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@Hıōɒņş&quot;],[&quot;@@ƅCÀĤĆğ&quot;],[&quot;@@ʣÜɨ¶|ő&quot;],[&quot;@@ƷhВİlč˅&quot;],[&quot;@@ЭJʀĞǮħ&quot;],[&quot;@@ů­ȴɂăǓ&quot;],[&quot;@@ȌܱȇÒƒӔĖ&quot;],[&quot;@@^˛ۉ Ր˲Ɯµ&quot;],[&quot;@@ӌˆǆȱҙȗ෽ǱॾΦÐάӆɒʍح&quot;],[&quot;@@тù­ʵϳAͽƷɭ¶ǈʔ̠hŤǸ&quot;],[&quot;@@ǅ{ÎŜĸğ&quot;],[&quot;@@˃Yzńʘ`Mŉ&quot;],[&quot;@@̒¡ɯǗҥȭջiȀǮ˚\\Ϫϴļƫ&quot;],[&quot;@@Ȫŝ΁ǄƘ¥&quot;],[&quot;@@ϥɡǿƌԘƠÎÉ&quot;],[&quot;@@ʩIÀƼȪƱ&quot;],[&quot;@@ԥɱЁu̩Ţ௒Ɔ&quot;],[&quot;@@QȵֱĈýǟחœΟɵĵžЦʞǇǖ୧ͦԵƃԏRϟȉ˗םڳͫࣳǴѽƁލÒۉҮѷ¹@ơϋIы_ȚƟͅбඕǘ͗ӷӻŜғǫտϿɶ̷ࠗӅ¼Ʒ߅ƩÁۣ۟؁άįÂʓƱƅٍ¼ΉÙԯ͹ƧʯʮࡋŭӃ،̳ƣʕ΋µʚҩđ˿گѝİʫŽ̧ƟaéńҭŮȩӤΓى˱§ʇżČšఫۛঋķŃńʋ­ÎƔߟɖŵϜҚĕɞŊɝ£ǭŬÀǜ϶ȼਯ͓ÌͶȘŲʦ«ώƂУԴЬȌPǩЀ̠۽ƓࡍקºϘО͹èůȬіȰͻıŅÈě͸๨ĔɖǃDŜӄĴɑøĆŔɧɧӕľǻŽ޳́ðĕȶ˰¬·ȌDƘࣰù׸è௵ÈĽȊ٠ɎƦÉк¸Ħ¼ҳ»ǼǠદĩĞюĊ઻¥ǦǬՌƚѼOѮȵϹˆВƲɱƀǺĒҺOhőҔƒ˘ȝتÐƎժƲǏĀʂĖųͣŅjŵ݉ɏЧǎ࠾ײߪ˜ĠÎ˱¹ǌȆ֜Ǡ̊ã΂ȬлŽʃĂҰԼ̀°ȽŦੂǔޓÇþΈؼźʵĦϨǴ઴êࠉÌѪʮՎȏĈƢϋæ²Ǝϗď±ŪˮƐЦqʱĶ׊ƈʮ̇ĝμଌĠ࢏ĚೲԾƄ˂րœʧžӪɎѲåָ̛ѪɩԥζǮɆkįͤҔqɨľҖƭԳͰߺ̨Ģ֚͟sȊࣼдƁŀͨƦԜƃцT؋سലۦÛѽͼĐǎȜ̦¼ʽȚ̌Ũڜĭгʟ̾SáΛ՜Ԭހǻ˞²݈έֱű௫ڠīǈȽʞUŲŨǆŝψ¾&quot;],[&quot;@@ҢūҩɣÖɬĞ&quot;],[&quot;@@ߞ˴Aŕߛǝ&quot;],[&quot;@@̝ļ˔HŃ&quot;],[&quot;@@μeɌ̉ॸß˭ƃຈȡጇЩŌʊํÿ،϶஥Ұ୊İ&quot;],[&quot;@@ܮͅ࠵ȘӁτ׊ʕ&quot;],[&quot;@@ղMີ«ԺĬҊ±&quot;],[&quot;@@ࢢęƓΏؔȀʀ˽৺ǥ׼¨ٺ̭෱ŋ᠏ၽይվ̵ɰטbȎƐᄨĞĳĎᛗŃ·ɎՄmఐ˒ਂүŒˬƈଫǅʢ̱ş˝ú§ʳѷť߯຅״ߪȩ̒щb̷ŻЃ͠Èɺ̄åҬĔӮěOĒஎîũਇũٺJגȗӂϢเۓѷצΰ̰Ҕţ&quot;],[&quot;@@࢙UᅮĠओĉ&quot;],[&quot;@@ୢǙƊ̒ҶÔĚʋশƤᓂǛ˴Ʌವч෋ǫ࢙Ʋ၉[؛üϡĐठƂႷXЁƚԎĜ߃Ěபṳ͞঒ȓ&quot;]],&quot;encodeOffsets&quot;:[[[5208,61755]],[[5078,62551]],[[8298,64858]],[[8675,65196]],[[11501,66423]],[[13284,69504]],[[14206,69904]],[[15573,70598]],[[16139,70207]],[[17924,71267]],[[30676,71472]],[[21278,71772]],[[19718,71749]],[[20242,71902]],[[24183,72243]],[[24595,72261]],[[24004,72516]],[[31611,71459]],[[26201,72850]],[[-9168,72540]],[[19681,76177]],[[22127,80482]],[[11521,80498]],[[29745,80806]],[[17190,81825]],[[33307,82042]],[[21400,82176]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Norway&quot;,&quot;childNum&quot;:27}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@R¡ĲƃķJç¥ś³ſyYקmɫǐ˃ĵ׍ǶǳµõǂáVɵĉčtэɲ¨BĦ[¤Ň¦ɁäśÂəĩçfǏ¼ĕR¿i]ãҳŰmÞÞ¡\\ƫ_ƏîƧĞÙ£Z]¡qOֹЀӥ˄Í`m{a»Nÿ°ĉ´ŽĜgľĘrÂÐpļCĘÀŰîƄŮƜɪȂzjº¸Pǰşà®ƌȴȌ¦Ǵqǂƪə޼ϛάί̒ĆðuâvÁ¢ĵ®Ŀӊ̏¸MǶ´¶MUBióģ³øoǖaɤDæµæíæũ½cÎr^Ű¸æýĢ¿äĞĺ¼dÜOzq£Ƹ­ðĸ÷Ųa˨MȨÒȾ_Łأ&quot;],&quot;encodeOffsets&quot;:[[90096,27786]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Nepal&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@§ÓėØƀC&quot;],[&quot;@@lë̓ǲɨƔiǝ&quot;],[&quot;@@ďÑǔŗ׿ǁɼ̐cǨƠJǄƕ&quot;],[&quot;@@ĳŉ¸ð¼&quot;],[&quot;@@ǡŁuĘĝoƶȫƳûĩäØƺʗzʂĚ͜o&quot;],[&quot;@@őµƸǪ¥ų&quot;],[&quot;@@ۦ̖ů̇ǜɺʬsɛȇ˨Śʧ˙\\ȭǘÏࢽਡԇʝĤéǩğƖjĨƩɢ±OǕӁmĮƷşɕƔŨǍ߃̱āկūBĪŅ΍էÚƽ̙Ï؛ԡ́Í߭`ǋȲ̅GʫǼƝý՗ƺȬɡëÌŸȍÙIŐѠĴǥÈǌĪɍWRÚƪ¼¥ĆʊċØĶǡƖȞÃĴǺŖ²ŋfǀʪƨĺÍ©ƐԎЂ؆İSŘ֐Ȭ΀̼ƀeýØʸ`óêŢ¢ÎËȢʾƕ`ǄʈȢƢ֔ϲɌǈӺтΰʮAǯqyĽʆƱńα&quot;],[&quot;@@Ǔ¾ŞżǛ&quot;],[&quot;@@ƮútđՌǑƁƬ®ɔҏƹW΀їãҁӞŷðǳƂJç؎ʾɑ˰އঔ̉آςѸŗɥܟʕƝÉѣ͕Ɣϑůř˩ƞıɣПܟࢱ֡ͭŧǌʅM_ǜȗÇѸ֘ü˨ĉƦūƎࣙϊƝǆæưҮƪǘƬǢݜńü˽צŰįǐŌŭŠʱDʋϘǴğQ̦ĿÜ]ïǻńĹǶFğȾʹĥաۊǶȊȿƳ¿¶ǓȦØǄСҼ˴vãęʲͱ&quot;]],&quot;encodeOffsets&quot;:[[[173239,-53757]],[[170211,-51979]],[[172181,-47986]],[[170987,-46264]],[[-180405,-44790]],[[178089,-41844]],[[177271,-42269]],[[179757,-37149]],[[177428,-35773]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;New Zealand&quot;,&quot;childNum&quot;:9}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@åO@ńȲ˾ÈƏȓʡ&quot;],[&quot;@@ɄёОЩ൲ϵրܙͦŵmʏέ؅Ѝ͕ΟץɝdƦÙSʵ́ŭӇĈ։ࠣɛωٟݻŧȉɏhɝǯʁ࠷ϩȵѱĥछጊᠾ࠾֐၌ϣמ\\˦˨چÁĺѢĺ³ŸƕxՀǤðÂǷ˘Ȭ&quot;],[&quot;@@Źn̚ñ`˨ʎĩי&quot;]],&quot;encodeOffsets&quot;:[[[60132,20704]],[[57742,25579]],[[57650,26267]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Oman&quot;,&quot;childNum&quot;:3}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@MΥ٫֕ۖߕÄ޽ںՓe˂ȕDƳ¦Ȟ_d[iűĩĒǖJ̆ƷáśīÉ_˧şĕ·ãÑ{­_©ÒǃZ·¹ǡaÙüÕ`NĻÙŇÇ@ˣ̻ġíaéÏR¹»ÝËΫƅГݽһɷ§¯ƍ̍Ʊƙ·ŉeí˟ý̛ʻįÛIęº¿Ƙȍôƅù§¥āŻŹȅ˟ʣć̵ըɋǛ£οƐǟ¼iľI´HÄjàHȱȎ̡ÖƟÐővÍuKÚšA}½¯Dgååa§O³Pão¬R°eɏ¿ǅËʗĹõNç¬Ù¢īDǫMīBËdÇ[ëhuC¡¦kMg_WuGʧȡFěaĉmıÑ£ēɋŲǇų̟̂řӨϿĖG̬̿͂ǉĝ˰£ළřıĻԋȀх¥ÃţྥqjbzêrʤĜSºNdÎªbnvŸ|Ɯ¼ʄŤĪWÔŒܚƦdƠ²xR^QǖÂ Gx²»{RΏZ~҈iͶܹ̂ا࠸ıĸǅǐ͌ğٶǿЎĹࣼöҀėʜŸל^ॖʴĮ߀МϮԼyʈĠƅƌӨʠξ@ɬƙΈʬиɔӲٔɦ̹؀ٞ¯ͮĆːŉƊվո£̨͗и¢âࡢԨ۸Ŋ&quot;],&quot;encodeOffsets&quot;:[[74844,37750]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Pakistan&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ȽĸŜê|łʏ&quot;],[&quot;@@¿ƌÞr]ƽ&quot;],[&quot;@@ēƇʂѵ˽ͿȉŐśЁѩۨŒ~Ūʜ͎Ʌ˵̨ĽċƧĞUųĕɰӓ̴ΝwƯĳŇǱÆ׫͍Bŗϔӛսɱȟ¨ƍԼǡɱȣĄȉΔγ¶ÛĮϋVƽÙ[ƧůɢƔĮbUŪ½ĘÄżĤ¯ØĉÆ·H@͜^jX|~`ºlƂïäÐÂ­ŊāǿŶc³ƇƖąʢnĩƶҐ̟ѢĚװ˔Ҧ͜శ̥תӝ&quot;]],&quot;encodeOffsets&quot;:[[[-83561,7509]],[[-80791,8473]],[[-79231,8867]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Panama&quot;,&quot;childNum&quot;:3}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ԷσȕŗȳÏLŃo{iij{sªÖë°] {WýƶЃŶħgRI«°ñĊÅŐƏĆġHŃĵũĳũۤĉǖбۼ^ȊŘØͼ˺|^Èty©m­MÝଢ଼À~êß¸¦OªFÐbżÄĘ¬ĸEƒkĄFݦಧʙͅāګǠУЩՁ]ƗǞɯȽͻǢя̾ǃǃřXƓԓҷk¡ľşVÑ@@AÙÉĉÛƕ­¦ʋĽǹЯśޙ֎Ǐ͚޹Ӱ੕юୁڒίњͳɠω٪İºδԝ࡮ˏʐÉͬ΍͂đϜϙغӛఈԫڀԯࣈ७ײmƴȞ¤Ǧϡߺ¬̆پۜƮĞæǁ¦ˡeq³őv«i¹b¥JĎEùŃ·T°Cø ĄĘ¸^ÚĎ¿Ĳ±¢}ðRÖZ¼¾^ŋă²×ÎóÀ{æAĢl¾j²^Môf´¤ƨĔ˂ʬܐĖÙ͊Ь঴ΚӸΰѦԐŴӎZƄwS̤ƑƴÇƈÏ¤ÑLʊgǞü˰űlt­ÂÚ¾»¤¡¢¿êɩ¨ÝǊ·ÊÍºwÄÑǖ©Ƙύʦřϓƒ½¤¯؈MȠØªÄ¼Ä¾¨\\ǌÑƌġǚlêÊòh¸hɚŕ¶ÁÔYʀő¦¯äÌe՛ऻǤíEÄhJ}¶ÖƗŴģ¨×KÅu£KÙ ġ]ß°u¬½ŁcǅRß]ƥƩܷŻΉȳąĭīśĝùµŏw±yýљƵʡăuÍĊ̱&quot;],&quot;encodeOffsets&quot;:[[-74892,-6621]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Peru&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@έƽ̀ɚîÛ&quot;],[&quot;@@ɂŕĭÏΗêʄļ&quot;],[&quot;@@őYŃȼȎÞɠśȗƣ&quot;],[&quot;@@ōýbĦĬg&quot;],[&quot;@@©Û·ôržêfFƻ&quot;],[&quot;@@ËoKľØč&quot;],[&quot;@@šUWĀźé&quot;],[&quot;@@éœķöǢ&quot;],[&quot;@@ƾĤ˙Ƒ̙Ȑģþɿo̵ŔŽXίͧ͝Eҗ̩ࡰŕÏʷӕǪȋâУˑ͉ĩЄʯǍ׷̜œƠýӶȆ͸ғΠơSďͳʛʘɅƝ©ǊƧЉہƫfȚˎض֘ǲŜɸ͒ɨΒɩ¥͑ͰƲǨ̶˜ŚΆɮēÌƄʐWwخ҈λ&quot;],[&quot;@@ÉÔèȄĊɑħ&quot;],[&quot;@@Ѕǁƽrĳǌ̚ˌƌrȮŏdȩ&quot;],[&quot;@@ǏǢƠ˒pѳ&quot;],[&quot;@@Ļ}¸ƺƀÏûë&quot;],[&quot;@@ģ¡AƶƐŐ©ɣ&quot;],[&quot;@@ŗIŅɖʯƎƋ˸ÒŜ͔ŀΖƔ͐ɰĜɈÏ¶ţͿޓWɑƞ˩ǃǫ&quot;],[&quot;@@`Ѥո઴ܽʯɫˣ֭&quot;],[&quot;@@¸ŏáBjŎ&quot;],[&quot;@@ýÓŎ̄༾๜èиȺ˺u̡ƈϟˉơƫɡ·ŧ̅ևऽۇ&quot;],[&quot;@@űč´Ŏþ&quot;],[&quot;@@̘|ĆƉ[ΧɊБŁıŻƬ˭ȷŖLԨĽƲǻīԦȴǉ&quot;],[&quot;@@ĿMĻưŴlĈǍ&quot;],[&quot;@@˼g´ŻɜĂȽˇʟƓۇ͇Ų৖ƿǰĨϾɽ&quot;],[&quot;@@ÿYëɚƦFǵ&quot;],[&quot;@@ņ¬òǩʯGĿʖǸŏ&quot;],[&quot;@@șŪƲ¨Ƶ&quot;],[&quot;@@äǥǺŉԇè̙ƌǁхĄǕǒįǼÞǨң͚ŵΖߐ&quot;],[&quot;@@˘ˑJǵӑ϶ˇʓâքЖʝ&quot;],[&quot;@@ãȽùȎàɢŦ°§ʡ&quot;],[&quot;@@HñƁʸźȅ&quot;],[&quot;@@ðŷ·΀˘ɇ&quot;],[&quot;@@мːʧdбū˳Ɓå˃ʖɫքʿȲÀĖʮ&quot;],[&quot;@@ǚÝġɑƥľîǲ&quot;],[&quot;@@ƭčŗŎƾΐǊǧÁȧ&quot;],[&quot;@@č̋ÿ͐ǎ&quot;],[&quot;@@شˏǌĞƆĲyħڙ̰ґ͑߃ґɃXɛǷ́ʮӳËŽŜ΍ϐȧÜÈóŶάƜʴŉƘοǐðnȎиȋSīɍÛɨ̓ƃ̜ÙéϿƵļÒȐՙņŭͮӋϺŃkǘЭÉǛȉ˞ԉΖɵăƁǋȽ~ɉǤǟãi͒ʲʰfŸ̛ȤJͯű{ǁ˸Ɨ¶ʹ୼¶ÒˢɻǬÀU౺ȰܶтĜ&quot;],[&quot;@@ă«ĲƘmī&quot;],[&quot;@@TùſîŬL&quot;]],&quot;encodeOffsets&quot;:[[[123137,5383]],[[124068,6222]],[[125024,6583]],[[125888,7587]],[[119890,8073]],[[120172,8412]],[[127803,9363]],[[126667,9460]],[[129031,9545]],[[129085,10001]],[[127585,10023]],[[128707,10153]],[[122795,10738]],[[125594,10725]],[[126087,9282]],[[126332,9677]],[[126728,11555]],[[120127,8643]],[[122739,11802]],[[127565,11616]],[[127600,11769]],[[125437,11894]],[[122920,11985]],[[122983,12460]],[[125599,12605]],[[128246,12829]],[[126686,12583]],[[125025,12652]],[[126746,12753]],[[126241,13162]],[[123602,13803]],[[124841,13866]],[[127339,13960]],[[124963,15366]],[[124008,19063]],[[124848,19349]],[[124438,19827]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Philippines&quot;,&quot;childNum&quot;:37}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@áŦŔƾ±ˣ&quot;],&quot;encodeOffsets&quot;:[[137826,7560]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Palau&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ȌġǧɡĨéǌ˨ŷ&quot;],[&quot;@@ƅÁćÞɎ[&quot;],[&quot;@@]ßĉĨ&quot;],[&quot;@@ǺÂÅȧɫĒƷ͐ʰʻ&quot;],[&quot;@@ɔÑĘȿϩÔöÑƨü\\&quot;],[&quot;@@ȡŎĊžĤµtȕ&quot;],[&quot;@@˒ġ^ŝϝǘĮ¨&quot;],[&quot;@@dÑĳʀĦĘU˅&quot;],[&quot;@@ɝĪɔoJù&quot;],[&quot;@@ȵǘ\\Ŕɖĳ{Ƿ&quot;],[&quot;@@ȧƧ̿ŢšΎϋ̈́}Ф̬Ƨ̼ѱ̘ȡŔʳ&quot;],[&quot;@@ƝŀłĮȭ&quot;],[&quot;@@ę˔üĆĂǡãǷ&quot;],[&quot;@@ŕ¸Ħņpƽ&quot;],[&quot;@@ǜìʐŅ¯Й̯ɅƆʁÇďǯę̍Zʉً̯˿ۏwɩǲʃٗϔĂǔުĥЈ¼ŌÜņμä·ćȧĢǷ׼ÞΪФ̂Þßֶ˔ă&quot;],[&quot;@@qóđłĄ¬ù&quot;],[&quot;@@AᇴħƔĨͦCᲘ@ǌྴׯԖġҶ̽ΊiԠѯȺζοkӣ໒ջȢɏ̇؏·ƑħȤҙ޾؍ĶϙǢşŐ̙ԬhÄϹؼǅȿıĨǧࠌȇ͹Ñǜǯ˝ŗʫÞəȌအʄكִ­ˢ˩Ğԇܾࢷɲġƞ̓Ä̯ǅЧʠʌНĝí˅zĄǙࣷķƩżşyɦƣ˖r˂ŇɠʍUǗ؁̭ΕƄअ©ƁĒ&quot;],[&quot;@@ÕÛŷǒÑш͛Ҧ৳وˑøäƔ২֭ࠠܕĬȷƕͻ&quot;],[&quot;@@ɫBǡƾɠøǞïPǇ&quot;],[&quot;@@̶ĉșĻևuĠȠΌ\\&quot;],[&quot;@@ȁèĲƺǙ&quot;]],&quot;encodeOffsets&quot;:[[[157221,-11751]],[[157984,-11634]],[[154521,-10818]],[[154707,-10260]],[[154142,-9570]],[[153954,-9721]],[[156295,-9174]],[[154734,-8943]],[[147033,-8685]],[[151579,-5966]],[[159701,-6847]],[[150709,-5562]],[[158359,-5563]],[[149524,-4839]],[[155562,-4399]],[[156335,-3208]],[[144360,-9337]],[[156637,-4870]],[[154048,-2725]],[[150598,-2007]],[[153360,-1590]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Papua New Guinea&quot;,&quot;childNum&quot;:21}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@βছثНВȷ¡ѭºǩδοċÁĀɹıķɕ֥ГˣʗµÉX¯ºŉX·uĽŢ÷ʷQÅRϟņ͋ǞҹNǯēыÐʱǡʧpdƘ˧ȎʗǕˇĤɩ̲҅ƀŹÁȹŨÚǆʋ«҇ƢĠǅ̍œέ˒ǬŴřèɱ࡛͸UŅñqñEJZĔŘòy˸{zƱ¼]jzêŗǤŴȾÓƘÃzg`Ò¦ĈėİɕŘĿĄV°żĀÚâþDdDÊŽϒ˘ùsƸ̅ņဌ˸̾ɜ๜ʆμŻ˕¼ʹ̿٤øԖ࿮»ӂSN¶ÐKêoexIêcĦòìµǟ&quot;],&quot;encodeOffsets&quot;:[[24049,55235]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Poland&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ūɸGŋw&quot;],[&quot;@@тÁPś̍ɥ਍jÉ̶ĘŔࡼ¯&quot;]],&quot;encodeOffsets&quot;:[[[-66995,18541]],[[-67716,18888]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Puerto Rico&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ƈȝϛĳЕЃ¡ܗ̯ŋۣԃߋ̉ơӗ͢ĻӴϯ˯˅ߕqϥуɝĆɅŕ̇ȲΉɕĲ˓ôǾŴџ¢̈́άФň͕ĴȮО£ȨӯȚŗťɵ͞ѸϤऌϐوېǲȎȥࠀťŠȂȳ݆͊῭͒͠ǚҨ˾ęLŭɾǫ&quot;],&quot;encodeOffsets&quot;:[[133660,43557]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Dem. Rep. Korea&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@мġ˙ăǩĖĐ&quot;],[&quot;@@ϼGQÕҙAģŌǔ«&quot;],[&quot;@@è͝GÿĢͶÇ&quot;],[&quot;@@ǛÖŨ´ħ&quot;],[&quot;@@ʻļɒpªū&quot;],[&quot;@@ũYlĒľ÷&quot;],[&quot;@@έƣٙĮͳõƸͰÉࡠǴmŋĀΏÏǬȖøȖ˨́˯ȃĻĎĘҒҌٸŸ՘ÏߒōÆĢƪіǒĨ˙ؾlɎŮѺÜɧˤş׹ѭĲ֓ȇƧŘũáȉţĭΗiҎԗ̃ԉȦɵŰNУϭң&quot;]],&quot;encodeOffsets&quot;:[[[-17603,33658]],[[-26264,38750]],[[-28822,39376]],[[-29328,39450]],[[-27725,39571]],[[-31884,40353]],[[-7583,38072]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Portugal&quot;,&quot;childNum&quot;:7,&quot;cp&quot;:[-8.7440694,39.9251454]}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@lÕ\\±«{p¥pǉÂîʵĥڧYʻলŷ˞ƺ¬_ïĚñ²_ǖ@ŤwĄđNđňƃâޅjº¹`ė@Õxï¤ä[üYĨhĊp̜ƊƼõÎÍňÛɑŽۅĉřǳIţaίʭɋͥǝȓʑßq¹ËµFåËåµÙCƋúǳHɭțนɾνĲpÂͬМ˾ȨɈ͊Ӣɑ˴ଫӘףЀߕȢȳǜ׵ЌΓӎƃƤƙöíºB|sx̾ঘBцѦޘเ̈ޖVވѿj̅&quot;],&quot;encodeOffsets&quot;:[[-59555,-20648]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Paraguay&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@đëì]~ɼɘ D_ƫȝ&quot;],[&quot;@@ÐȠɆŮÛÊ×lÏkkNOdÔȺ°Ƭ°ĺņØĤkêi`æ£ÊKjƃķّӏģ&quot;]],&quot;encodeOffsets&quot;:[[[35173,32044]],[[35718,32121]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Palestine&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ŨIĿƅŊȥE³ƞɌ¶Ɨ&quot;],[&quot;@@°£Ə¢ĠB&quot;],[&quot;@@ǒʳóĢŔ&quot;],[&quot;@@ËÈÖIć&quot;],[&quot;@@ŧemŎƴG]ğ&quot;]],&quot;encodeOffsets&quot;:[[[-152905,-18114]],[[-146883,-17018]],[[-142360,-9927]],[[-143437,-9652]],[[-143434,-9124]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Fr. Polynesia&quot;,&quot;childNum&quot;:5}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@÷iíkÏ@³RlÓì©Ģ¼XýіȾӨɒƠʀȿ·ͅľЅƱ͓Ƈ½&quot;],&quot;encodeOffsets&quot;:[[52499,25198]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Qatar&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ĘēŒ¯˲©MÎĦiˢĨƲbƐ£ŚġůΕёï Ǿǡ³ʱধ̧~˳Ǹϫ˵ŮܷƇ׿˱ᓝƐ§ĨƈŊ˗ƈaVǋƾºĘÆlæM^Yáŧ²ū}ųīěgƷŀɯħäƍCvP¶HàNZjƧøĞƲl՗ɴgʀ]R[SeUeE³ÑøȇĘįŒrȒĘŬĨ̤݆ਈ݄ψƮºìæÂEǤāȄLߚÃʹǧТƾȌlȂɈtÖÒ¤zúŘvƪ~̦ėՐۃϪ̥Ƙ˱Ƒ࢕Śů&quot;],&quot;encodeOffsets&quot;:[[28890,46542]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Romania&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ýÎɚbƛï&quot;],[&quot;@@̢µջ˯˝ɑ}ƱāǦظՄ&quot;],[&quot;@@ֻ˝ɋ[ٓӕ̊Ϟ՜̶ƂŎķɤjШȒtŭȧ&quot;],[&quot;@@ȭ£ѠήӺƾܫӇ&quot;],[&quot;@@ɻËӆ˂ʉȵ&quot;],[&quot;@@ǗcǶ̒]˭&quot;],[&quot;@@ѱɕŻ¬qǢϲĒΖ̸ƧЁ&quot;],[&quot;@@ȥØǬŊĤeéƻ&quot;],[&quot;@@ӂறƙ݉ŦϛѢଋݮൣ֑ԠˇÀՃħѿृa˫ֈߋɦĂ͡ů˧űѾףŢсڃȷ҄Ǫׄ×ϔǾΨ˅ئɴیÛࢾŠӼПќ½ҌǐѪҞˌƀ͒¡ưϖ̷͔ΪĨ&quot;],[&quot;@@Ļƣ˹~϶Ŧ&quot;],[&quot;@@ɠ·С̵ɑǮȕé̂΀̨ĕ&quot;],[&quot;@@۲ǙдIɐƿşʷGÏðŕԇFࡹಉÊ̶ϲҞÖ͊ʖ¶O̥ʟʹáǌ ˢ&quot;],[&quot;@@IũݥԎѲdyū͸˛&quot;],[&quot;@@ĵǒĚÛš&quot;],[&quot;@@ƏÿʒьھǦ˯ࠗʁ&quot;],[&quot;@@ǣȿƤʌ&quot;],[&quot;@@̳ÀűƾӘ±±ǋ&quot;],[&quot;@@ަƻƲǩԄĹƅɔÖӝȒ܆ɫ¿Ïሴҝ{ˑ̺äŸóÙ؍ΠïĠǋʺňhȱʔǤϩǔŪʼϵŮܶ°ѮÛƓĩÄĩÈź֢ХĦ৲ŏઊӵāāʬ¶ĿϺu­ŧ׫ŏŁȳىǂˆʣڧ_݃ƼҨȍÛƯ̑w͂ÔƁܹșʆuċƋоǷ˱AƏĨµǕ˅©ɀͷƥ۹̒ۗîϫǬȩϮ߳ŤεġޣOѵҌǊeȂ͚˹Ƿɳǂƹǳ̗lęʃπ͑կϙ@ȶ@ȶ@ȴ@ȶ@ȶ@ȴ@ȶ@ȴ@ȶ@ȶ@ȴ@ȶ@ȶ@ȴ@ȶBȶǜ&quot;],[&quot;@@՛˛׹įЅÀĳ϶ѴȎ͊b࢒˙&quot;],[&quot;@@͓ъ΢Ȟا&quot;],[&quot;@@ܑìНȤвĬࡢőƣʩ&quot;],[&quot;@@UǫګIœŪҥvεΦѺŤ୸ѳ&quot;],[&quot;@@ʐűƛȹٯˈռä&quot;],[&quot;@@ƫɼ૆δ@қख़Ɠ&quot;],[&quot;@@ȻëխĚن¸Ťå&quot;],[&quot;@@ذģԢʣཡȹӫÖ@Ҝ़&quot;],[&quot;@@ٗt݆˄Ԯů؛Ǉ&quot;],[&quot;@@ܱňҀȲ˲̹&quot;],[&quot;@@ЕĐdŒٚʧǁ&quot;],[&quot;@@ϿŷâԸ&quot;],[&quot;@@ठěʵͧ׿ɍėԩং۟ঞͅЕŝٕŨĪƕڿŀ࣯W৽ǌʌǶТطǸDǄఉ¯ΩƢÒ΢֜¸ΆǨɊ˨˱ļڒŀıɢಬǢѠá&quot;],[&quot;@@Ցµ˒ߎž־˷ߝá&quot;],[&quot;@@঄˝Ğ˳༕ä޹Š݃ąતіऎ~&quot;],[&quot;@@ؙh˨¼Ͳã&quot;],[&quot;@@ԍßǹˆ܂Lyȱ&quot;],[&quot;@@ԕʱ੻ɐ͂VǤƼબů&quot;],[&quot;@@ͲDĿŷ֙Àͨô&quot;],[&quot;@@ǍƟ˕¶ƎϠÂNă&quot;],[&quot;@@൘ƄƩሜãƩǱࢣƟધxᅭͰ͐͜ɐǯ&quot;],[&quot;@@йiȺϦЂȩȁǑ&quot;],[&quot;@@٤Ǖ֜юসɯࡢ@ඤ˩૷У܋ÔχȄǴ͂ՑkğʣޮΡջűСƞกŧӱİӧʵࡍŠ१Ѻ˼niͶπTūǒծƆײèै̱&quot;],[&quot;@@țſࠩþÎØॸU&quot;],[&quot;@@®ƝҿƪђK&quot;],[&quot;@@فWࡐŒɍĹ&quot;],[&quot;@@㎅ޡ࣡ʵȌđ۝ʛιêǗǧыZêɫ܍ǳUȵϋÎȖƯӟʕ҅Í஡ƀקđҋΒ݊ǌזϮڞÞүŌޔˤׁƖȎÎ҈ăɰɆٚSϜ˒ۖǊ୮Ȯ֎qɔǮ๨రŢᧂՐ۬ÝϦȏ঩Ё&quot;],[&quot;@@࡟O੒ƾȱƭ&quot;],[&quot;@@̹ЊìďĹ&quot;],[&quot;@@ƇȞđǈըƦǂАC׌ɯٮϸŞ;˾࣬ʟƬĎÔ̪ɀĢΨդʲࢰӮΎƽʶČȘ̹Ķۙɵ˗RνƃșțౝKȓʺÒ˔ɃɖBɒ̛דкη]̣ȎסϗȞ΂ɅŠ}̜͏ͤө੘׉ֲӗƊəÍৡΌᔹɗݡйuŻӴÇĀЃֵеݹ৏ƶŃïǱڷȇӟ˥৅ʼōĆǙ¶őéDǩ·ŋÝsŉLƅTÃ`÷ɫǄɕĄϏ؉ɣŅÅŃÉŻÝÓĕÛş¡ĝĝaǟtΑĝճçý\\ō©̓řıoɿÞęGĹ֝ČÙvǻԻWùfĭ°χɐ£ʚʇʅHĩF÷đ®ċĢȕĮŗ`ǥUų[ۭƜયˏϏ_ŗvÙnį\\࡟͔zŐďĤiȄ¶SĞdG¬ŏ|ƃȿǃ]܁ɖÉZȩHǏNħfǝĮۛȸɅˇҋˉɷнńŉÞǭ¤ÈÚWºo{șȷʍէɭŵUȇŸ֝dȽĈҗñΉpƳĞĳJýI_»G¥ÄǭŒēˬ९¢ƋƤëXÝUËµw¯J¡ŷàÑ¼¹[ēű͙M̛Ɵ­×DMÇUǱƷûßc¹ԍŇ·ǅTƻ×cĕá£ŷ`mÁÏ}ďyVqpWáǕυµÏgĿñ«mķC©FȷċÿRבВ¤ǶгɷߕĮȱϐ֕ƬͅҊӳȂԃďɣƑࡷXßǼˇX²ȈͣĒʋġqȥοƝᅁᐴିوÁňȞMƶʠ୳̑ǻǏ٥ȹċƅбŎϝƟčɔ΀ˮЛíԛƪƧǉɕ͒ƳĵމNþ͘ϕצұţৣȐ٩ȓ§Ʒᖭ̓͛ʃՃᒁοוÔɃͭҲĉʱÝ}ƃϰ¹΢ȇࢇɯʟȄ˵߷͹κʁࣺ˛ƓϵϓƑѣa̭ƞȷɥʏõÏņӍØѱ̴ѧxͭǝαƨѧڱν࢙ήñЍΑъکψ٣@̏ȒܿȟƱƠ̵èҟσػǥƥșוȩŒֹΣÏՉѪɵiґ։ñˣȖǻˡ́ͣͼƯȒЯǄÂּăږ޷͵caŵ׆ɥҡɁǃȱܓ̍ƛĄÈųƭʿե׵ԌͳžҡƺˢƷ܋ठ৅ځէЇêӋѾˍàǽĊӗǺG|þȬkpţȁKƵŪõfŇÓviSáŉáþ¡tř\\ƩȏñĉkyōJÅnknVYƅ¾ÅϿŨõ¼Qșàয¦ĵ´đ¶ɱšş¾Ź®Ӂh»ËųWॿۆ҉Ōˣɼ̗GʓɸӝƮ˂ŜȃèŪ²̈ŽθĘǀːξæÆĥĔƈʺIӡˈŭȖؠx½ŲܖʘćƎƟFăą́sǮĤҡƛżѦҀȶ݈Ʈ͎Ĺɰǅ¤ŮǼǰ\\ˉƾ΢Ȳy˚ʥIԗʆɍևȒǱōԽЮګǝхǘѳɻ֦Ȼƈ܋ªýΤɶĐ֍ӄથʿɍ̟¨IrÉĂ¡nqxPȄiȐ}ûÂ÷Òµ´xĚĺp|Vζ÷ʖ]˞ƮĞÈb¼Pɇˈȿņǩ`ƟIÇfÒŀXÆW~tƍ°ȋîĕĄĩƊġäĴE^}př ƻôOn\\°t®ŰŖ@g¦åðÁ²GzVpäÈLƢɿĆ͡ƮǇQėR±YµãsħeůÉÍ¹ºlżࣷİŗò®İS²mÒ·ļOǯǐUê|\\ƕkǈ̌P¬SpɏĨwà`ıH¢ŜŤŐȤÒɵ̎Ëӈ׼ӲśĠʢɶõƸƀΰiǘƞࠎŁ¦ìϛȦշEΧƸŉʪ׹şཤࡔ఺޺̆ͼ̑˖ৃѶњʊTƮЇȲ˔ϿǠȈƪǿĔĞ͂͘Đࢋঔޠٶեͦօņǵʤʪ̝̐ÂҪĲΠɶטŔþǠֲćRȶ֬ñϚĨYŦ࡮șýĵإÔǚǏԺQiđЎ¼ˁ̟ҘȮᆤı༼пט˯ड़ʅɊ[]þӒˍӰıͤчƛ͏࣯ѵௗșᥟ˞ׁǸ˻»Ď઩ǌȁȰࢇÚ๖׿ʛħلĕӢɯîƷ̵̹Ոߥ٢ĕӀ˩ࣞǃѶŖĀŤĝȔ٧öҹ˼÷ǂ̈Ȟᝂԃʦǎ͘PիӒfȼආѴؠͬ࡮ĕΜƑģŃʪfɖő˚ްիˈΠ࠾ܷΜ׸ĿༀËڤՋঋûՃ˿ֈȑ˖ʛԜù঎ƨȀԞ߬ĆáǸͶsᛶ֘͸ƽ˚Ŏͅľ௪͚ׄE׍íŒЇ֝Ɨ৺x͖ýҴ̮Հæ࣪āࢠ˰ݒĮ˂ɣɫʛՄûƜ̖ӾnώɐٙԖبɌ᪂ʿפʋᄚ̽଴ҹ٦՘ԇbҋњ͋ĖҹĠƗŝ͚঺šĊυeÁɚൊԐ૾તłą๚zાȇȧ֭ץү۲гŅဵ࡞УϝʧÓΏਁٓЙƤɹۃƏ˽êʸŦ΁¹ͿƆևaǡƲǭ४ȣࡦdҸħ;ðĄȔୀκʂΚ׎̐ͅռǂ˦౺Ȍ̐DټёÃׅԈǫॴh૫ƌÜςˤÎ˿զ൳˨ӣHԗůࠓ¬ɑֈ٠ٴ੍ܮӮʹૐʦǣ֖̮ӶҳϽ˳¸ԯആǵֈؚȥԸHŢÌзQ̿ɮ๻ʊͳ̞۶ĺހǑϤĮǻŞѯikĶوƼ৔F૸ʓݲ̻आ¢Ўăމ΃ƅ֋¶ǝծҸƊ̧̽̇ͰĽMƸ֌ɨӭҶ͒Ӥ˫ǆұ¨ҩ˸੡Ȉ^ϰΕʂƆ˴┰Ÿ්Ɣऍϗݔ˥ا̌঴ƄϚǒ࠿ζӍÔͨŒфĽ˨௃ʀΊƞϚő͞ĆΨȠѹ°ÊĐ֒ᑜϲ὞˒হE̴Ǆዎк±ΟǃܖĨWĩᆒ̐ञǵȕȗʼŎsǦࡧ̂ႌيï֛Ĳ¾θശѤ୼Ȇႜ˷༙ʍᘪÉШĝࡡΏસTϮǺ᧮§מǧŵċ֪Fˣ԰ǖʔ̟ʘ|ʏ̑फɘцɑʌОƉڧλᣭ׋}ŷഡЍޭÕӻʑЫm࢛ѿӄº٨ʬ੮೤˄Ѳ_࡚ɒউZҰɰڜßÚĪΚq˓»ƢşظĳհǼǒ£͒ɟɓǁˬħ̧џҌǑϗƠ֞Ғ́ƆໞǔᲄƑΏÕuǽૐɣᑔĉаvřĸҞÕϲȨōЊࢨîࢴʭրĎʢǵЖǴ׬Åଢ̳уǽΘmȞƕۧƛܨćňɫЍñ्̖Ł࣐ҫʤƊɀƩԯÛޚҙٴȑȂÐɞǻ࡜мԲֶ࢈Я࡜ܚȈҀT༌УăĀЂĊͩ¸ˆǲҞΰƹٲ ɕ̩ͦÈۢȪࡗwƔϮƔఔúɫʰ੆ƛ⇈ɻcû௫ԙĻŀÇᒌĒ׽̍ĮǊЅöCʇ׉]ŀȗݒĦৄѨሪƍѠɥ߿čãĕൎƝхʙܶżԬÿєɛˣغů↨ɒଐ­ૄȽվЗɷσ঴ɝŀяɲĭϡϋ׮̮{ЌՈȜࢊĒᴴǷࢊȔϒϥࡐǉʤʙެϪȂ΍ҎΟ˜КᚔʅƊļᐜ©ᬐՕؐɳ@ᾕకϵ٫Īܱ̪ҏג¡ƼřŻÙࡏƤ౗ɵ౎ȄʜǗǭĵઊƬLˋɈŝ̜ïƺŪŸē̎ӿʓ½ʬǯ¤ŪԄͥŇśʾˑϙ̭ໟɺ ƶ˅IŖǹᕩإݟěЯʹɱÀ¨ƁїŧEėງՃɍЁ̱ĐًѼࣷmއƕߡҧŗļǺь੣͗ŋɉέǾΉƍlð͡͇ȷûЕ्ܕƱ̷β̟ɚȚӔƃϑεXЛŌŷˬâϣʍǁǧlǱƔΈʒ̯ťȕϋƝ̡ӽ͎سЙȣ܏tו̑șͽƴջρĞ۹ˡɯľŘƅĭЫ͛ӕ੍ڭċȏΊſैɇ̚ЫှÅОάଆܮԄņƨŭ˂ԸhǺȄԞU޼є՘Ԟྀࡲ˄˄ൢϚſĠϞˌǛİͺۦ͠ƬԢąǬÖ࠽ɐࣱŹˁևȪǇƟŇȕŒϳൃރӽīǦ͚ӵÍѦ߀ٍƥ̧ǮळƧԍ͓Ľ଱࠱صʱ֫җťʯےáǄɓםvϓşˇŲ˫UҗʍлĖțĵٕǣǨड़Šދ˴ܩÇƸ¾ࡳǶӝŝŞţ΁­ƅȄIȥġЁƀرūࠏǂЧʉеȲጥԣŉຑ޽˿Щ຅܉ࠃۛᎯ৑IǯԀůߒßۇξd]̢ѴĐ˝ƷжŹӥͳה¶Ӟ̘şˍʛǜZȾ˪ή֎ė͚ìֱּ࠘ʭǉɷ˻ÔΔȹĻͻ̒ɏıɏηʧ΋ۍĔ׽ƋƝ°˅࣓̅೫௻Ƚћշ؋ಗૣɣīر܇षӟ܍ɁϙƮͽPJβωǿÔǨٽ֧ϗ~ŀőŭȃ&quot;],[&quot;@@ǵÕࣇè੾Q&quot;],[&quot;@@ЅΙ୚˂նɥ׎½ƖˍӑƇ࿏ŵ೽Hෟǹჸା֊ÿźƪЖƭ&quot;],[&quot;@@ૺű߃O͵Ƃ&quot;],[&quot;@@ળŴŭǐᓘŁवȁ&quot;],[&quot;@@ો܂ĨЊų&quot;],[&quot;@@٧|ՀŒŨƍ&quot;],[&quot;@@mͯߎʖ௸ɳ͉ϟ՝}ݚ˧ౣƣᝋʼѕک̌७ĀྔԐʜÇ፤ņ&quot;],[&quot;@@зì˞ÒƚŽ&quot;],[&quot;@@ûɻথ`ǴɈࢮT&quot;],[&quot;@@ফzіǄ࠼œ˥é&quot;],[&quot;@@Խɏ˰ᆲųܛqχǏ&quot;],[&quot;@@ԓFÆňҎō&quot;],[&quot;@@ࡈ¡ȨơࠓŎೃˋƟļࣃᒌȲ&quot;],[&quot;@@ûǽࡱǕٯÜՅÁµ͖ᓚd&quot;],[&quot;@@நȩᝣ˫ƖǇਭåƀƂݷ±̅İ੄ȔৈYƂʲࢄĘ&quot;],[&quot;@@ޭĴŰࣀUɅď&quot;],[&quot;@@ࢿ¤ୈĖˇŹ&quot;],[&quot;@@ๆįञȱීŃ৷ĢԻŐ֤ȴ&quot;],[&quot;@@ʶǭէÇࣙɄ۶ĐӖÝ&quot;],[&quot;@@ٿźᇮ̀ՔɟჁș&quot;],[&quot;@@˿Ý૓Ěඔ{&quot;],[&quot;@@૾ʿ܁ȑɰəᵥɛᅋ̌ศζ֛UĲüᏘͰՠTؐǣ&quot;],[&quot;@@وŅף§õǕႭfȿļጀȢ&quot;],[&quot;@@ಛÐഔP·ß&quot;],[&quot;@@ƉĦॆvĂāࢽ&quot;]],&quot;encodeOffsets&quot;:[[[150236,44794]],[[149717,45566]],[[152166,46406]],[[153281,46738]],[[155651,48023]],[[158526,50496]],[[159664,51510]],[[160159,51874]],[[146188,55700]],[[140471,56423]],[[141252,56415]],[[21746,56591]],[[170650,56156]],[[154205,60436]],[[167563,60010]],[[36676,66747]],[[71702,68099]],[[-184113,70595]],[[51472,70847]],[[165343,70555]],[[173262,71251]],[[61902,71614]],[[54174,73078]],[[183155,72527]],[[141271,73224]],[[-183169,73295]],[[79496,74027]],[[81410,74468]],[[76453,74623]],[[123148,74844]],[[56648,75068]],[[72371,74850]],[[145598,75670]],[[85555,75850]],[[144395,75776]],[[116109,76187]],[[88733,76781]],[[84145,77230]],[[150319,77180]],[[139212,77220]],[[143410,77649]],[[98850,78109]],[[115178,78460]],[[152730,78500]],[[69392,78068]],[[98597,78876]],[[91663,79042]],[[133824,43318]],[[110281,80007]],[[105354,81157]],[[78079,81563]],[[94908,81598]],[[52644,81863]],[[61122,81875]],[[100019,82083]],[[51254,81997]],[[58449,82280]],[[54806,82110]],[[59348,82047]],[[55722,82405]],[[48581,82795]],[[63660,82775]],[[51485,82870]],[[81948,82789]],[[62609,82894]],[[56033,83063]],[[60030,82987]],[[64895,82637]],[[93765,83089]],[[98844,83022]],[[59198,83504]],[[65179,83568]],[[59695,83677]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Russia&quot;,&quot;childNum&quot;:73}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@aM¡Ýľƅà{ª½¨ĕÂӣkĹuÕÇ¡PµSÁoEŧòʓēƿÞ¿̓ƛßʵ]ʍǴóĽĵîcȢɊǤÆЌ͊˨Ⱦ¬Ėœΰͪ¬X¶EA&quot;],&quot;encodeOffsets&quot;:[[31243,-1092]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Rwanda&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ÔôĈț̙ǪºȊńʋ&quot;],[&quot;@@ݶęȨϧ٬T̮իWƟφș¿¯Ȗɍضѥš`Ǧ̵·ǩĽVѶࡱĞĻ¸ÿâãľǍk´QÐ@îløjÐÖNďȗɒ­pǩߴ३ᒤʽèèϤם֏။ᠽ࠽ុΑܵΥӽשř˱ʣƑƕNȻʾ৉͙ŀਙđлǈȑƁu֛̫ˉыࣂҙϚѧژЃ֭ࣞі̑ľϝӬƵ˰®Ǭƅ̦ØװԇऴқЊ́Ě̥ѺîŠį˦࿿ᘲϩĄćÅ˜઎लŷǶżǌŞĮƠĤƒª׶ňlbÀŒäƘbdhdǌĂİ´сѐ̽̈ūŘɎÄɺÎԲžɜÈӲŮZŰİȊ˰£˖¡˼±ĠഄڿෘਙߊսൠŉƦ&quot;]],&quot;encodeOffsets&quot;:[[[42996,17117]],[[47649,29795]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Saudi Arabia&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@²·˦БAÍęÄSĹªܣɺધड़ۃƿƳsWwWuµmi[ЃŃȡőµƯƋIá_ĝh©C[gŻFÇùƧt˟̇޹ŝȕlǉpǟ¬ЗͯఽϣőҷڳƱߝƇıǗŒȑȅϽȝؕǥü̘³ˎٵӄ³ܢłԤБL^ǵ֑EɢʝèԷ৏ઑЁËكҠͯǳōʝбƥŕɥڛFƙɰڳXΑŉةּ½ȦիÝŧɿѥɇݙ͓ȅԟŴÍʤżȎpМډआÀΨ˥ȠUΈĝàĵӾΣdđĦ͸ҐĹЂζ̦Ɓ͜ʐƠɘτD̸ƞƜܮfRṴ@о࠾NBဲᢴ@ᢲAƘPŞǚð¯©ŷ⯀B&quot;],&quot;encodeOffsets&quot;:[[37757,22525]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Sudan&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@Iޓĳď֡Mʁҋݼ͟ƊʃլӅɰګʆ̫ƷƱǥǝȧȟɓɉǟǛǛǗȟȡơơá³Яŀ֋ƣǗƽ˳ʂɁĿͩĞˁʛåŒƝ@ßǰˁŬѣԖǩtȳȁлĨʥƳȡvͻʜ͓϶ɑԪՉ̄ǥ͘®ưࣩږćŊhɂ̇ˢҽżŧ͔̾ȆɈݚʀѦŨլÞ¾ȥتֻΒŊڴWƚɯڜEŖɦвƦŎʞͰǴلҟЂÌ৐઒çԸɡʞ֒F]ǶВKŁԣ´ܡٶӃ´ˍû̗Ǧ&quot;],&quot;encodeOffsets&quot;:[[34896,9689]]},&quot;properties&quot;:{&quot;name&quot;:&quot;S. Sudan&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@¬̍ǬɃ¸˥ÿȯȈˉǒ®ȶΫBҋࡓÃҁǊŉkŦի˯BʅB܅HƵùǑĉɝ«ʯhć]ƥÙĕgŕb¯S£ƞˊìŽĘũŉgДĪøۄFjƘѸÒŖƈݼˏΜƠųŖέםʸˍíçşࢫBǣˊŲŖƣ̓ՖƫöĉÝùĔ͜Ɩʮ̺ɮφĔânưĜǞ˞ЄٸǊ׆ąδεĦr̆ħʰХ̶υ˜ȯņã&quot;],&quot;encodeOffsets&quot;:[[-12575,15165]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Senegal&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ˍKƘĸŶī&quot;],&quot;encodeOffsets&quot;:[[106465,1364]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Singapore&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@Ͳ´ŻːVѺїʋēڧѸصƠZŀͯސµ&quot;],&quot;encodeOffsets&quot;:[[-37993,-55363]]},&quot;properties&quot;:{&quot;name&quot;:&quot;S. Geo. and S. Sandw. Is.&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ùMÚĊ`û&quot;],&quot;encodeOffsets&quot;:[[-5828,-16381]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Saint Helena&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@őaϧːӺʭ&quot;],[&quot;@@ȕÿĥÈȜļĠă&quot;],[&quot;@@͞Çɦ̳ӱĘȽŶ§ǢǉVĺΈƵ&quot;],[&quot;@@NŧŧôˢƸɭ&quot;],[&quot;@@ȂƇ͔X϶χƛÅ܅ƒǅʘ\\Ɔŀ&quot;],[&quot;@@ȪŧʫºÂî&quot;],[&quot;@@ŷ¤þèĊÿ&quot;],[&quot;@@ƛ«yƞǐ|Fŭ&quot;],[&quot;@@ƩŰƖŨTʗ&quot;],[&quot;@@ȼʡ«ƿǶƋǬձԃծµΤĽƖƆ¸&quot;],[&quot;@@ŔɝßėșƔ}ƨɋÁíÐɰʢɮɵ&quot;],[&quot;@@ǳĀÆŬƌÕ]ƕ&quot;],[&quot;@@ƩǺ¦ŒȼűķǙ&quot;],[&quot;@@޻дУиɶ¹הΥΌʡǩ&quot;],[&quot;@@ƋP¾ĮĎĽ&quot;],[&quot;@@ā˷ĐկּӠɇƌɥʚƛ&quot;]],&quot;encodeOffsets&quot;:[[[164431,-12081]],[[170121,-11015]],[[165597,-10636]],[[165425,-9856]],[[163585,-9495]],[[164013,-9211]],[[163010,-9342]],[[161903,-8892]],[[161167,-8922]],[[164608,-8513]],[[161550,-8439]],[[160944,-8302]],[[160449,-8113]],[[163717,-8739]],[[159580,-7267]],[[161267,-7506]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Solomon Is.&quot;,&quot;childNum&quot;:16}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ΧŔ˲ÈĒ¯[ū&quot;],[&quot;@@ÚăIy½śFwh[ĤmĬ̷ƩʋÅt[R¤UG¾ĒĴ^ÞUE{ţĻǯįÝʽȗȃ͝ʱȩ˛ࠓЖL̰ǽŹĒė˜ǉÎĽǺǀKǈǤʍ«qɢŮȝƘǸjĴǌǠĢǔ˦ŊǌʊmȚİ՘HÌer«Œśʐ͵&quot;]],&quot;encodeOffsets&quot;:[[[-12826,7615]],[[-11016,9611]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Sierra Leone&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ȰԞ͡P]N¹^§ErŐÊŀƈĝĊ`øIÐ£byÇʕű˹ىĐƤćક͂ʓƪ Ɩт˴uŰǰt&quot;],&quot;encodeOffsets&quot;:[[-91507,14762]]},&quot;properties&quot;:{&quot;name&quot;:&quot;El Salvador&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@įehɼĈɕ&quot;],&quot;encodeOffsets&quot;:[[-57617,47963]]},&quot;properties&quot;:{&quot;name&quot;:&quot;St. Pierre and Miquelon&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ŝ¯©ƊȀƬÀƉ÷Ļ&quot;],[&quot;@@ýìĄRŋ&quot;]],&quot;encodeOffsets&quot;:[[[6820,124]],[[7602,1606]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;São Tomé and Principe&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@tƱ­ăĿƣ_ŧcĳO³»ĕũɃőıAMWQBqèŻR¥ ¨U¤uGÅQ×Pć¡·U¡̃ȏĪmuĕsyoQÄm®á¶¿ ±K¿O÷ùϳČȅĂбۈėѲ˿b΁תǪӈÑŸǦƜ͌|ĸƨğŞľǴȌώؠě˴ƻWǌɘþۄFټƱuʱͱ֓ňځˈΥ&quot;],&quot;encodeOffsets&quot;:[[-55331,3717]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Suriname&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@]œƃÿƿŷįWƍ̩É˅Ƕ߱sſș͏ů˙Ü۫ȇÉǳ߱cԫȤɿ͌òǲƶȰԼ ˞ƪÚǊ֠Ɉˈģʘǖ˨ȍcƗʨoʲǢьÏǰĔҺM͌ǝϠŅÆQ&quot;],&quot;encodeOffsets&quot;:[[23080,50251]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Slovakia&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@õręVǷŷйǭaJàĿoĹ̿ŇÞÕÏãPZćuŋTſ¤ƉkťĀ·âmLiyãíµqЭ«ʧöɢÜYòƗĤÁǂùKkZOnN~¾¦ÌfrEhǯkĘƎĈØ\\j¶܌ĵ̀ǦࣄÒŖƼǆKȜ̛&quot;],&quot;encodeOffsets&quot;:[[16913,47616]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Slovenia&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@će˚Ԧٶзࢯ&quot;],[&quot;@@əŇĀʷٗБŞƎűЊͶɰ̨îƨã&quot;],[&quot;@@Ïµ¤Įǒeƥ&quot;],[&quot;@@ࢭÍכłūɝׁǃūǕ´Ǝǉλˇٍ͎̃ԃᅿ׃ʙƳŴčʗęɛĈŌʋǟćΣLȈɳɑ̭úƵɥÇůĸܿΆƑʜ®ݮӁİɥࡋͯԄɱʇવϣٛc׬ťɫ·@޷ʫړѭӭ࢛wŇ̑±ƽŧłʯƗŋઋ^ô˲хҖˤuŧƪǜXtƒϱʐࠅ৲eȆƵzďԶ¤øǊêŃƠbž̨įʬڰўḔʙҪΌ¶Ƥʖ؋̴Ůӄʭࡌƨʰ԰ͺΊÚَ»ƲƆÁʔΫİۤ؂Â۠߆ƪ»Ƹ࠘ӆɵ̸րЀҔǬӼś͘ӸඖǗ͆вșƠь`ୀџܚŹڈ΍ƹгɼýʙ̈ˋʍҷϤϓ&quot;]],&quot;encodeOffsets&quot;:[[[16926,57642]],[[19535,59224]],[[19617,59313]],[[24736,67385]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Sweden&quot;,&quot;childNum&quot;:4}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@Ħ»eɛÄȧNˍóz}MwţkǳZŏǹGɯ^Ǐ´ǯłĿǔ¯ļÛNYlR̎ʈζĴŚņô ZGьȇvX&quot;],&quot;encodeOffsets&quot;:[[32715,-26580]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Swaziland&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@DýƅƪÔ¦îő&quot;],&quot;encodeOffsets&quot;:[[56874,-4805]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Seychelles&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ӏї̹éĵŋ¶رƅܷǩ˷ᇳࢳ࿥ࢱϑÐӫ̈łǸМƔź£Ɩ͈òñðʴʞãǰƥÊ°Ƅ΃yÕڔśŶÚɸ®ÊØMƈßvDǌƜzƘɖÀJ|ēǎR¤¨ǐÜ~rĲSƒ±æ¥̶SôǒÆƾ¨ʈĜӘǫŠDǜ]ȾBŨlƺˤòׄɮ঴¸Ƣ¤ĜêR_jIķ&quot;],&quot;encodeOffsets&quot;:[[43376,38000]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Syria&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ǂ·ǇFþ&quot;],&quot;encodeOffsets&quot;:[[-74068,22376]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Turks and Caicos Is.&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@QṳܭeƝƛC̷ɗσʏƟƂ͛ε̥ĺЁͷҏĒĥΤcĶӽĞßV·˦ȟ¿Χ̭Þ؇̓ó̓އݑαɹ୕ǁÏđȈƱқԡޑ½ܩεȩ˄ƕƵΝƧБbÎɜη٨ڃլ̗Шɢʎஊx͇̌ťʖđϸªؚȟւ͕Ѩǻ²ƱBōư˛ϒčΰµȸޜଶच঄ɖᠶȔΐ͘hȆΥӌǟఊࡊϖ←ႱỨལ&quot;],&quot;encodeOffsets&quot;:[[24556,19965]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Chad&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@řԛӈ͝²ՓǸʽrႫÿIȺוŽßλŃϙ̨ǯͰĞцœǊƾڸˁͼĮüҢʗÄĠŠßĮլϻ͎Ą̈ßĂҾƉ΄&quot;],&quot;encodeOffsets&quot;:[[923,11258]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Togo&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ĥŁt͠ĨåuƷ&quot;],[&quot;@@ĝƑmŜŌv&quot;],[&quot;@@ĿOqƞŲƍ&quot;],[&quot;@@O¹tWƬŠǞǩĹΟĬǟזIT½oƅö̍ȩ҇FòĵNťȡҹ Ų½ÀfȸȂŢĀRRļÌôŨ´eÔòôÈ MǢƁĚ½ĀgÄō_hL̸ǤĠ¶ì¨ÂhbvFà^ĸIŢƎÅĚk¨pĊđŮȑńơĘįʾȥÜƉ³ȉ_ǉNȣÎƳȒʱĐÉƴ±Ú¥MƃȊŉfCÏoćĿț@ŇïZğoõsɅk»­·ã¯ĉ£»k[S±«­ʛǜೡăʑǏ̧ҩǭsƎݝɌȳe˱ǔ͏˷и­ÿףҀ޿\\Äٺ̟Ŗ̯éȵȭČǕŁ̗rѧە།öࢯӦpżחŞƉäĮȫɠ࢓ę®·ɖąTwȊăƧɚΉԂ˝ЖJԔԻȑΕǏĹňωɩōŒÒІƯFĳǸ΅øëŐţȭΡκrȖƕĨŘȧbăȸƻČuƜəƠíǒĽôƃƓĭ¢ÁҖϰ஠°ЄζώΦ֨ǭ٤ɿМ\\ּӉզ̱ԮUȒ̮ƐֶȎŌÐƞ«Æƥñȅժ؛ے×вɑȒ̺ÐÒܺǖʐ̚»ҜìƄ˜Ί¨wǴɘƜĊÄQ¤Ĵ¿&quot;]],&quot;encodeOffsets&quot;:[[[100771,8092]],[[102473,9817]],[[104886,12277]],[[102526,20805]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Thailand&quot;,&quot;childNum&quot;:4}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ĕÃÏÔMh^@Î_ĈW&quot;],[&quot;@@̟ɝՏȔлƳF}åÇ·ly§ù¬ʩৢÀʢǉ֞Ǭk\\yWCȔ± ũɜØÀ§ê«ΈƮЀqłZĐ¨~êdƊWJ©{ƗǖɕğĩĘȹȌÉɄĶ҆ǗèܟȌǹȑŹ_TċÒÑʻr÷E±ΗćăPuløÌb[ÁX©`ĽtćQƟ­˅šȧȧ࠯˧œŰćʂŲڂ}pÃAćsÏIb®ɄÝŘѧĬˋ̅ǟŵ]²ķGč¿çÍœnƏǏ_őÑÇkó~ĝ]é»µ¥Qí¨ȁƔ£RuK}Ua[]Y·T­Sʁķó£]©oo£RŧÓġnĻüÙĞÔ`ȰҊ،əɘϢοÊŘʑîÌȾʘƀشíƨʪȖÎÁŤƖ˻Þը~Ë̴Ŵǚ̚ġׂ͆̌ʿ͉˳ʀƷʲ&quot;]],&quot;encodeOffsets&quot;:[[[72361,40812]],[[72662,41205]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Tajikistan&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@¥GקȌǭˉɃIǵQřŕ½ÕƯщŃ¯ñ˝Ǉˑŗ؛ƓƗĥțÝĹ¹ƛā͉íǿǬϿ¬ɵǔçSSȼċĠºǶýϞٹKɹ˚ԝʒŹɐСƢүcށʶƇȲمƙƙݟ{ЙɯǙʵڇŃചƏɔ̱ŎƯÛầ̰½ŋĸ^Ȯнà¢ǵșɾÏ̂Ǯ՞ǜǵЄKɈƛѐµŢ̬fǖԝϖʓԊ՝oǍıŽɝѕ̙ӤӀ̰ࣄǀ؞̵Ӥ֙Ҙt࢔·ĎòŻю˜ɢѰÈǸʢϐǁ˓ˢ˚ĦĮٞϣՌĥȧɒƛĿ\\̟̬ƭڎɈò΀ƵӤय઀ۅҞƷબا̞LՔɏãǛ]ƽAşXġ&quot;],&quot;encodeOffsets&quot;:[[68119,38245]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Turkmenistan&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@΄ŶƋȧȷò&quot;],[&quot;@@ěʤŞp¤ŮǱU]ĢɌʜǠÔਨĮ̆Ŧˤĝ͋ʓ౏һ˷ȣ&quot;],[&quot;@@ÇƟÓŜŔ&quot;]],&quot;encodeOffsets&quot;:[[[127014,-9565]],[[128070,-9740]],[[128662,-8335]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Timor-Leste&quot;,&quot;childNum&quot;:3}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@êßőǥƀǜ¿&quot;],[&quot;@@īAĎÚ^×&quot;]],&quot;encodeOffsets&quot;:[[[-179365,-21677]],[[-178128,-19086]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Tonga&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ݥÅ΀ǘlˮơĬ؞ĺĭƝl҇&quot;],&quot;encodeOffsets&quot;:[[-62476,10378]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Trinidad and Tobago&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ȡbpŴɮÅ»ď&quot;],[&quot;@@ŻÑŎŜnÉ&quot;],[&quot;@@ƇȅĐ֯ſǟŅŽ́ƃʛ२ÁȼĭϜׯЄȃјȡİ˽Ҟiؚ̦պȶĘèĴÛϜ״šŶͦ˄qĔतͺŴOƣĴ˒£ĆΣĴ¥բ˺ÔǕձחĪʍΎɅĮͥίҿӓͯÍȉɌ˟΄TƥȢĦʤˉ¯¹ʪÉCuǅOËKɇäıD©}¹ŭËǃõƍëƭû¯¹ƍûŏǋǛ§&quot;]],&quot;encodeOffsets&quot;:[[[11221,34532]],[[11549,35588]],[[10522,32446]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Tunisia&quot;,&quot;childNum&quot;:3}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ʩ@ɀĐªď&quot;],[&quot;@@N£ʂ͙ŷȥĆ̗ԼïД˱¤«ȕĲṶ̈̄̅ȾғvϙŶ©ȧΩ͈ǓaɳȄŧ{ůp½PÁFǡıÛ¡JÎNŴa hďXƩùƇHӫŠŽƋ SėĥƯķągĸ iL^Qěéơ£঳·ɉõιƷˣñƹŧkȽAǛ^şCӗǬʇěƽ§ǑÅóğHŝRķEã¦²ƑıT}qÛ§ǏQ£Ċȉɕ¿yƗũÅ¡ĕuCƇà×Nçͦ͆̊ŝɄտ˯׃ȰࡑՓݳūΕŰ̗֛̐ɠשÄǕԃٍħϹƘɇ֑͠ĆʇƫÆİՋҪĴȦǔࠕ©ŲȠϻдƀÊRɈ߉ʢŴ̪ȞʱЂĮȥ~ťȒɂƬǗØżƟƪǼɎډçWĐäΞҴΈҠ²ǆŕɆRĶ¬ĭĎŤĬowĵ࢜jȁŦƞĆݠŊءƬʄᄚħǠǲ܊Έࣚʎ଴½ɌĚŰŗƦƋɖāв¢̖΁̺öʎƯ૆ɓ࢜ƶ۶ũیʦ˦ƌĄĀǈà}QĒÂҒ±ĎĴpXbPÚNÔM]ÑîsŴĩüng}mXy¬Ȓ&quot;],[&quot;@@ҐnƸΑܠ˗čȅڅÔ֡ěȭʉУǃӍΟ¨ȪҐʾֽ_ÉĮʘȒAʆʚƎǘɕĬîŶtÐ~¨dɨvêƶd¨b¨[ưŏ&quot;]],&quot;encodeOffsets&quot;:[[[26594,41100]],[[44476,42144]],[[28135,42954]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Turkey&quot;,&quot;childNum&quot;:3}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ĝʮʌǏ˟&quot;],[&quot;@@ÜǳûÇʣʀńϚǀϝ&quot;],[&quot;@@īҍđÚvψǈl&quot;],[&quot;@@Ḯ႗ϝപ৏ΕୃÎɗ֠׉ɏгCɧŢsZǕŗεŮнǄȿìڵبϵЋ̙ƟûۡɉзȷӑĴǏʉƷāƙͥŦ֡ŝī_¾ýÒƝêŁDŻŉÉgũfȡRȉGmĬÎĭ¬ƓɖºʎćҪȽђ˙Ȥęƥ߿ɚƏîہɦqĦhËjŧMįĔěŶć ɱIĝ¼ÛÞ½öğʀ˃զÿɎčƔęĺŧĦƍĤõÚĳȈ¥äŢuŮVºĘǄV¬YÔ©ŶǙѢeìDÂà˶A ˆKȔŰϠպ͈͠jƄ}ŎÑPėõd¹rmfQ¨¤ň£¬dzüǀhvFÂp¸T OÈvÖlĺWĊÞKͼ§Ė©¾ß|ĽƆÞN¢bTHŸXÎÊZ^GlG౶@ಀ@&quot;]],&quot;encodeOffsets&quot;:[[[40665,-8168]],[[40445,-6322]],[[40822,-5023]],[[34717,-1026]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Tanzania&quot;,&quot;childNum&quot;:4}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@BµF«WίͩĕŔȽ«ŠతǼʹRː઺਎ÛȎϓƼİ͢ûǎŸ̰Ëè˂ʜͪĝɂŀ˴ʁǘƾ֌ƤаĿâ´ƢƢȠȢƀ˥®gk³ĒãłHǋP¯ǍϪַm¿æ̗ZǙAţƫЋˇǝÑƥȿəǽγধ౿@౷@iF]JÉYÍÕeáNSG&quot;],&quot;encodeOffsets&quot;:[[31243,-1092]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Uganda&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@Ś£ӯĒ¯Įцƛ&quot;],[&quot;@@֝aؽ̡ȡ¤؛śڿѥɠƤ¥Ɗ͉ɁƢЩκ͓״Řͼ¹Ƴ˟ѭ¹ͯþ͓ʝԯåһ˫ϫƔĖҜ࢟ʲঀҘÏŲƏȑİ؍ûթǖƪŰϟľڲáǼŠ҃vʇӐĨҿ˹^ĦƇůԙÛӝֻӹŧÞϱřĢƏ¤Ʊaˡħĥj]ol˱ªő°ėĔ¬^Ǆh^°mþÐÐĘ¶¾¸TîĢĊÒrÞ¤¿Ħ[ÖEÀǀÌE^eHŁhEȠÞ͈ēTǔd²ǧĬVðPČq¸ʱŖĭˠˏǔSЌםƶéEړˬˏę˟@­`ǧýkƩ}ɻȥɇsȁȋkСƽͳǨߙÄȁKǥĂÁFəŝěƌƽrˡɰķCVƎŸİĀǀŔƄ^ʸRšø³̰¶Êˤʘ֦ДɖĲĸHðćǊČÂγπ§ǸþĮîGÖ[ðxLŰÖźĢèþத²ࠨŷƮaĸNÌQżŽͦqTāƆĪ֢}Êg¤ïcKĲĜàl¨Tx¢vDȴȵۄĄʐǡƶæiªSÄ¼yÄ¨þìŀôæú¶ŔĀȦHņ°ȒFǄM̠§ˀɎદ֎ӃɵďþΣ܌©ȼƇɼ֥ѴцǗڬǞԾЭǲŎֈȑɎԘʅʦJz˙Ρȱˊƽǯ[ŭǻǆ£ĺɯƭ͍݇ѿȵŻѥ&quot;]],&quot;encodeOffsets&quot;:[[[32781,47313]],[[39132,48222]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Ukraine&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@½ɤĄĴĤ¾öJÌ´Õ˴mxfÈĸʎΦ˹Ά͝gŻ\\óŌTȸǲrNs͒͹è²ϖǥ̵̰Ϫǝƈ̃А˫õëăęíéó·{g¿@ПƊñ£«Ï¿Ɨǩțŋ͏ʑ؝ə٫ƂӛĿޝϖօqӏӄؘʀʎŘǆĂàŴHÖÂYÈjÊGÄyÀlªŀĔìǆjàŠȄrücƖÚà&quot;],&quot;encodeOffsets&quot;:[[-59198,-31599]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Uruguay&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ʥ¸ƕ֮ȔɞWɘՐɿͨЁٷљ&quot;],[&quot;@@Ľ_ÝžƜOō&quot;],[&quot;@@ǬhʎǍΙŷÑǒǽŮĦðĊđ&quot;],[&quot;@@т»ŭĉα´ÞĒ&quot;],[&quot;@@ƐűЋXƍɢʼĮƎȵ&quot;],[&quot;@@ȣmƱŎǮƴȒGiʋ&quot;],[&quot;@@ýMǨ¤ĩ&quot;],[&quot;@@Ǖƿ˖ͤĿǣ&quot;],[&quot;@@ș֊`͂Ǻࢋ&quot;],[&quot;@@b×ɡժɀӑ&quot;],[&quot;@@ǳĠŌèş&quot;],[&quot;@@ǫU͊ČƝõ&quot;],[&quot;@@ıkƂĘë&quot;],[&quot;@@¨ÕůJĽŮȆá&quot;],[&quot;@@ǩĄưZzĝ&quot;],[&quot;@@˪©ɓ»ÕĦ&quot;],[&quot;@@ũeź¶Ьˏãǫ&quot;],[&quot;@@įŵŦǼuÅ&quot;],[&quot;@@ÏÃ֬Şઓ΁ۑÓŖǮʲņߖÔ̐Ɗȣƕ&quot;],[&quot;@@ɉlǈĢÂō&quot;],[&quot;@@ˍcǶĊĘå&quot;],[&quot;@@ĕmĪƺSƋ&quot;],[&quot;@@ȋĦƌĦĽ&quot;],[&quot;@@ĭpŌþÿ&quot;],[&quot;@@Ǆȝ̝ʪĨƆð÷ŻÅľÓ&quot;],[&quot;@@úśüķ٦ŕŨåˤúĴXΠ»˰ŏðƃÈ@˾tԲȳ̀ŖǠNÍૼœࣞʴՔȯҊǳ҈ǱࡪΓӨȫǎãǮ̙ȌˊHŪΗ̦ŬĹĻƫ֢ʣ̲ƝÈɛ̆ౙ©ą̗܋Ӄ̽ɱϞʧɂ@ϸǶϼǶЖŨپĲࣘ͐ɐƈÅÔöę̢Ɯ¼Ƃ´ŀɘNܦEٶ@ՒԪ̰ȎΘʮͼǖȠ|ĊJᥬFǄʄϴgӌՔʐڬٞيǊĨǷלŔήɛJଗ̴ĽÈίȰGŚ˻ǡŷկĉǽǉāĲʣJçȽɻæ¦Țϵӫʛ÷ðÇđ{ĨŽȅƁêǵõҭבăȳǺǝηʕʶđˀЅΦÎȩɞŎYŌį|ʅשţưϽȋhɌĹÃĳĪŏΓ୵ÿࢿ҅Ĭʮĉǎ˭˱͕ʖŇěԣ^Ǣؕ࠭Ƈ©¶ǐՃ̂Đʦ̊ǎ˝ŷƽǅǐҡʮ˅ĉƽŰƑݩੱȸˆҲǇdO͠ǉçǵƀBƐȺtǑŐŅ£ƢŦƉČǎŊčĠêļɸ¼ŅŌĎïØˋə­æ÷ƭųŦţŋ½ƐבʃȲR×˞ϙѵʬmćģŸșǞКȕʏYȻȐJڂϵãǽůNԱОҾзȴćǷř|«ĥʭȚЊϟį»ȗȘԳĜӠſƺɵШ`Ϻࣿ΍۸ƹƢ̣˟ƔCŏķ×˧čƥǶPɫրZ[ɻȖɨĂį]ǑͱʗˇóŖƏďʡĆѶɏɟɻʓƐĂŉȘëʎ¤Ă­ßýܙȫĭņǡ̷ȯƫ́sȖ¹ɏͣLλǋ̑Еƈ¥ɧѻ̇ŅnOţΟƕɫXƈ÷ėœȇƈĞțΙ˱ ùǋȽìMǥƭþõŹÃ×ͭɢࡑ؎વ½ǵň̷ŹɶF̄ñƫJȞűƮǿזೕÛࠋ̝ԓՁûsƠǐơĔɁ϶̍ŶȱюŊǔǯœvΆȕĥǕǰɯτʸ̨ɧĎÄƽōÉčŘǈ࢔ࢗ࢐̋ƬɟÕƁ޻ȑāò@ÚĊëİ˓ȸÔƒŵĵחȜ˦NőòߍŹǺüWŜơġǗǏxČƣŇ͑Ǻ¼ȃ͸Ľ˝٧¤ΓÏɣƯҋǠǥùåřȦģπŦÖ±ųğƸēȘŤ ȏ̯ǙפΕŝƻãÄşčÇǴ׹̀ĘǛƅșƕǆ̹ƏҏƂŞ|ćȸɟQ͇ʀȯŗ¨ęƩޏȆյ­]Ɋ£ʓܳʯȞƐɃAǞɿŔ˧͕Ϳ߯ЍȊŦοǇĪȀɁɉĭćäÅȏˉ§`éĚĝ̝ůŤƕų˻ˡňÚƛǪ¥ÍɩĴЙʐѱȕ÷ปӚ̉Ԣ£ЮړټϩܖֻԂۡẴĳɷ҉ɵǽ߉͚ͥʔЋࠀঙڰʡˊ๟XEϙᛟIẗসĢǨ፹Ƴ˵٘ԧΪˣlăɰՙĂϱʴܿ¬ƏĞ[ҘǕòǺ͑ɂӿռÐѪӳ̚ĕˮ®Ɍ̀ˏ˃МÒ ڐ¤ܱöŅˋΉȔÇÇúǪڗװōܲѱԂʈࣶϽଔ݈͠Ȃཔ»դ٨ÅȵİԛRz˚Ċơ´ȒȉǠɨĎɥÔwåȥעʉˆ¡΀ؠǱࡄāǐÂĺɋĹţ°ˉ΁ǼlŧOfâѠφţʳĈˍǅÙ»ĲǗǓ˜ÿɖ¡ΎƈȐɳŰĞŒɕƠƢaƐ£ĞĽb¸ÇŞ୎@෤@Ϊ@Ψ@ܒ@੼@。@。@　@੼@ܒ@Ϊ@ܒ@ȤAN͆ʨÅM¶ɋ&quot;],[&quot;@@Á¹ÁĜń¡&quot;],[&quot;@@ƯnÔüƳŜѲÛȡƩ&quot;],[&quot;@@ѭ_ҼȔǳ&quot;],[&quot;@@Šŋёōɚ͎Ęĳ&quot;],[&quot;@@ȉØļ¨ĎĿ&quot;],[&quot;@@ƑjΚǚɇȃ&quot;],[&quot;@@Ѿ³ڿƁÚτZ&quot;],[&quot;@@ŽBŲĬƀ·ųµ&quot;],[&quot;@@ԱYࠪǎŇĎɢĔļ«Ùțҳč&quot;],[&quot;@@ˏ̼ú«ŕ&quot;],[&quot;@@ԾƉсċυƼˊÚ&quot;],[&quot;@@िћͲͪʺ´þǼϮPŗƍ&quot;],[&quot;@@ȲĈŢÅ˃ǧǆ«зȃޯŷըȐĶƠǨ«ÊÊ̩ČÌň̪Ä¶ė&quot;],[&quot;@@ǹa}Ĭǎǚęů{&quot;],[&quot;@@VŰŤóŹ»&quot;],[&quot;@@ŕìƜ¬ŗ&quot;],[&quot;@@ĆƑʞūɱÈ௹ˇÁǂ΄ʤ֠Ť˦Ë&quot;],[&quot;@@đāÔƚ~×&quot;],[&quot;@@TǇəŚvȨȐƹ&quot;],[&quot;@@̕ǥ°ǚʈŴ^ŧ&quot;],[&quot;@@ȴCóǩ؉Զ˨ùȢˍ&quot;],[&quot;@@[ßƣØǀH&quot;],[&quot;@@ŎÆÆǏʵÒɔ÷&quot;],[&quot;@@́ɱñȒδ &quot;],[&quot;@@ƟRŦĂzē&quot;],[&quot;@@ǫʁɓǞ˃ȱëɂȆΒ̘ľɬȑfȩ&quot;],[&quot;@@̨gĚȕоǏΦΏ˵ĨĵķǶTǰɑȘ_õеࢭԪƈÌÙǌիǐςŖŉĬ̷Ñǲƴǌ&quot;],[&quot;@@ɉĀŐĦɮųƏ&quot;],[&quot;@@iƓŻ[̹ŲɾΜˀɇŕ&quot;],[&quot;@@ħ²ǰćó&quot;],[&quot;@@ʀƃ£Ļø&quot;],[&quot;@@ǛĘȒɲǿƭ¥&quot;],[&quot;@@ɂǍǯѯȫ§Ę͊ʏ͎ȘĀźñ&quot;],[&quot;@@̶ÕɅÙ³ʙǬƞ˫˛еҶԦK&quot;],[&quot;@@̯ÓöŐ̈́ĉy&quot;],[&quot;@@̌Տ½уʣʬĈƈϓŤŌǤɉȈ̛ȫUɬ̾ɈДƷ&quot;],[&quot;@@ЀD­ĹɢŃǑĹѹɘŹԁĳϫƣøû͓ƵȠǲϙźăȇ˫ѴҶǤά̃ŹҶ̔ōɪÄ´ƪʼÙ¡Õ&quot;],[&quot;@@İɅɢŐ͢ğ_Ǖ̱¡̠¢ȱՏƼŅȷǿvփѴȺȺƬķ¦Č̪ &quot;],[&quot;@@φcΖџЁΔ͌׉ԕʹ|τνܼȲǋ&quot;],[&quot;@@ϊ¥āōǗÖįʏzˣƙϟĀ;ǮǢeÍŚΦ³&quot;],[&quot;@@ų´Ȭà÷œ&quot;],[&quot;@@ǱüΔńǡǿ&quot;],[&quot;@@ȿWǊĊ¶ñ&quot;],[&quot;@@ŌӲΐƊs׹ѧ&quot;],[&quot;@@;ÍŚͳҳűࠫȴʟǖԌV̢ƒ˺B&quot;],[&quot;@@ʖѡřëŔʸ&quot;],[&quot;@@ŇɭēĸȜŶ&quot;],[&quot;@@іƃͻ|ΉȪʰġ&quot;],[&quot;@@ή¯آĂضʳ۴¿ćԓʽǷţƔࡻ˔ڃÿī̐ʄ¿&quot;],[&quot;@@@݁@௯@݃@௯@݃@௯@݃@ӫȪȦÖæЖĭʠŪψVžH@Áµě¡õˈřҨ˭،͓ÔʻèYƊîŶ¬˂ĠȠDĦʶǂjŀԴľˮ^ˈƑĜʑɢõʆǅÂÍĤ÷֠̅ɬɽɰɱϜϗĜýŢŋÎÝ¡­·ÅƴŀkÕąȨÃǝ̒ۖʗƠÂĝˆ[ìƃǙޥ̣ɋɱǓ̌ʤƈ͇դĂņفǱǗ˻ơÄ©ż̨΀ʘ ˱ʙƮգՖաĮƵЂ҂ÛΙɢ˺̩ ƍãʷȒżϒ˧ʇӉȄӳߺśǻΌߧЙƔ˛WũΠǼÜǅqŏƦÛʃٙɨÏƉϐÃŊǇɒ_Ɛűҟǫ޽˴ࠃӬ੏̤ɔƞBɌȎ˽ÆǬȞ`ϋƪࠧʩࠩǊ@Ǹɗŭੳń৛åŔ׹ƺǮˬҵʏճĈȊƢݩàƮèȷðƀ˄ºങȇĩàɈɂӹƅCǥǱwʦŵ͑ƻѪîž÷ϻзۯTŅĜǟ˯ĭŲñƳǡ ǉǽ΅G˝ˁȽ¨үģǱÜÆĸРŊ̔Ɍ͹Ĺ͹ŎϨвϖޒʨମŭࠓʜԶˢҗȃՕl࠙ˑߓ׷П~̬ʡҩŽĲŏҹ¿ѳЭٔǑgǣ܍ϙŧٕť٩ϕփǩǋ̋ງӗřĻɶįȓőñĺǕǓ؝ƩŗƹģǺؓʭݏƓ½ŢȰ~˅ÚҳЕʿñȳǎȿǅɉĢWůǡÝ´ʂ̺Ø৬װМĪˈwęęǞŏĆĮΒÅȻǜȦʶ୒ӌȲó^ȶ˸ɒЌȖ͒kȟƢð̺ΖŤʛºƘҤ˄ƔͰ˩ɍࢣɛʿȤàŲ̂m˻ĦɋƇŋj҃Ƌ؁ьȿùωȚݑɃĩŉڅsΞŴäˆ˱ŸϊӽאϬΌ؇ΩĪɻटǁϳĄݑԔ˝Ҥ̎Фķ­ƭ̼ƤɨƧʸƖСĆː¤ƍÈȵĕवÌȸƮΉ¶LĘʕơʡȞfǜʵT_Ė̠ɧĜϺÈāȘњ̼ξpƚǴǟïMʜΒĦqƺϺ˜ĹķğȞøǼ¹֔Ȃ˶ɚʸÛܾĘ˒ɖǫζхƶҸŨÜƪɱƜՇğࢡχͫɸºȓӍƒ੟œএň˳ŪÆǖљȘ٬ňਹŘֹȢහФ٦Yũǀ૆ɨ۔[ɋBŝ̡˴ō๘ДȪΞýïŪڝÞՃͦƴŤ٪ЧଠŇǊх¶҅ıϫŰŘːຽèӿшᖉن΀ÆƞϮঔEনżဤજǉƛࣞŤ݊ʌɂʿ¨Ȁάx׍ĢʹŶ̮üÂŉૼĤ௄Ң@ĭݠƝӉǉƤïڴɎࠆʡ߲Ōذ§ɐÑƓǃՊ»Ƨĝᖨ¤ೂʃཐµՀŵဖĞіéદ͉;E@݃&quot;]],&quot;encodeOffsets&quot;:[[[-159315,19469]],[[-160613,21272]],[[-160242,21435]],[[-160986,21725]],[[-161586,21972]],[[-163197,22459]],[[-82989,25311]],[[-82311,25746]],[[-99502,26788]],[[-82111,27934]],[[-93996,30209]],[[-86945,30355]],[[-91365,30807]],[[-121188,34187]],[[-122924,34733]],[[-122759,34898]],[[-77357,36086]],[[-75912,40634]],[[-74250,41970]],[[-71657,42256]],[[-72202,42370]],[[-72951,42488]],[[-69823,45397]],[[-125331,48533]],[[-125514,49313]],[[-97078,50179]],[[-180517,53036]],[[-182148,52890]],[[-181399,52958]],[[-180831,53112]],[[184042,53152]],[[181674,53128]],[[-177718,53388]],[[-176603,53527]],[[-178869,53284]],[[177893,53617]],[[176960,54286]],[[-171995,54626]],[[-170614,55195]],[[-169821,55369]],[[-169534,55436]],[[-166193,56164]],[[-167399,56301]],[[-163343,56476]],[[-134491,56402]],[[-163709,56452]],[[-136050,56212]],[[-164177,56666]],[[-164541,56643]],[[-136504,56877]],[[-159299,57161]],[[-134122,56821]],[[-136771,57692]],[[-135966,57598]],[[-135283,57456]],[[-157909,57872]],[[-173829,57995]],[[-135932,57883]],[[-137205,58210]],[[-136567,58372]],[[-156679,58496]],[[-138209,58728]],[[-156567,59212]],[[-138987,59643]],[[-137912,59558]],[[-156074,59761]],[[-156145,59889]],[[-164781,59983]],[[-151574,61507]],[[-151281,61249]],[[-170122,61833]],[[-149907,61901]],[[-151202,61902]],[[-176888,61909]],[[-175578,65168]],[[-144386,70425]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;United States&quot;,&quot;childNum&quot;:76}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@§QûD«TæBbëĄÂfE´ÍŰmſ&quot;],[&quot;@@d´fĂèhiGo࢟ӹҬƝńƧɀÓǂ@Ā{`ZZǦƺt¸Ƥó´s]ÆđjĭäOĀmÂn¤[b¯LývWŴ|ʜƣЊѹʫǝªYųɏXρʋ͛Ŕˁ_ʱɿƸ͊˴̋ˀׁ̙ͅĢųǙÌ̳է}˼ÝƕÂţȕÍƧʩسîʗſËȽʒí ŗπÉϡɚɗ҉؋_ȯÓMx«xýI÷ÙQĹ£ĽtŃČȭʱoWĢBŠ^ƾäǜՓɐ̝KફبҝƸ੿ۆӣरͿƶɇñڍ̫Ʈ[̠ŀɑƜȨՋĦٝϤĥĭ˙˔ˡϏǂǷʡѯÇ˛ɡżэčñ࢓¸AᶢᓢҼᏠউࠜݷৼŘਢÝϴƎӺͻʴεʠĨùࠡЪUǰۅਐdƪƗÅȁȴŹʀXɈӎҤຘۖ&quot;]],&quot;encodeOffsets&quot;:[[[72916,40850]],[[72650,43263]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Uzbekistan&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ÿŊňÒǛ&quot;],&quot;encodeOffsets&quot;:[[-62642,13474]]},&quot;properties&quot;:{&quot;name&quot;:&quot;St. Vin. and Gren.&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@Ñäźļ®ķŕç&quot;],[&quot;@@ķǦĈíÅ&quot;],[&quot;@@ËȳСĂǄĖƺíưŊ&quot;],[&quot;@@|SwÌǷͯΏɷeғˏ˧ĉɏ¸ʩśŧΥЙַ̎]Ɲǔ͑\\ǱŖĴɛϖΥƦ࣭ւùɋӛȋǑ͵ݱΟ̳ΕéEžƃŠ͇ǕʋeѻϦ˫খ΃ͺȫ@ҢԺ̍ϖǋզ~ٚ̎ֈOɀ̓ĠԧŏߣםۤԛŘ͡ē݅Ǜ˴ɝźèٚɳ˺ŋКɗŴʵÅ̠ԄŘמừψ̤ʒЂ՜ǐ՗ʕĸ͉ǌƩõeŘ˱ѥۻв٣͆Ħƀǀ̜ω۞tδਤ΄ŖŮʖWǖ́¡ÿɘìǲǖä̼וڮ¡ήɫĒЅƀǑཤŞͪ̿؈ƿɼz֌̠Ϧџ§þ᎚ĘсǍ҃]Ȓȯ¯ȝǆŨȖΗČČÊ»CƂâG˺˿}ƶƬäڞ҃ȗǥȋү̷E˄ƽцƴՒrŴÉƼȱcµĭ³s}ĝЗȫǣɷĤǷuğ¦±¼W¶nÖC ]h_H}÷³˕ƫΫÕµęnÙ~ÇA½pƝÅßãóġ^ǬțǶȥǲȡ&quot;]],&quot;encodeOffsets&quot;:[[[-62461,9081]],[[-62280,9358]],[[-65381,11399]],[[-62199,5327]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Venezuela&quot;,&quot;childNum&quot;:4}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@Ƽʷ£ļþ&quot;],&quot;encodeOffsets&quot;:[[-66320,18222]]},&quot;properties&quot;:{&quot;name&quot;:&quot;U.S. Virgin Is.&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@̥ƙ˼Ǹj&quot;],[&quot;@@ĹmŸŊ}ě&quot;],[&quot;@@ǗĽÔƨń©&quot;],[&quot;@@ҿȉ±ȕǃęЙªÐɟǟǩnœӵϟ̥ࠇɢϵԢұgȑĝx௴ணǒRڔߟМ౫ӝŸ˗j̗ğŶĭėðɉĉrOׅƅŏ«ɋݡσÿƩث˓ɉɚ·ɕȃŖķÏŖi`űʗF˒Ƴǅɍϫ̦άэãſչψˠͿTǓ֗ʭ͕ϵ́łŲÝ²vڮȪ͞ʁǨśȥȮΤļǒƖAǮɨÇúĚ̌ĈŁʼÍEȲʯɎI˺žļͤÑ^ɘʊ~њ˚ƲĨĖ֔Ŋ΂ɯׂǀӠIĨV®iqÄÚÞ¾ÒhÆ°µæĕØķĂ·¸ĩƸpƠê~HüϹʺĲeV©éġƄYƜO²oÞțɜɛǖ˃˔ēȸÏĀ¹Ü˿Ʉwú¶ĶD੉ռHtĄ°ÀWæêfzFǔNʊ×PžŖ¶è\\ÊĨĪBÄòűFkh_ÂIĹĕVqbÒ®t¨üȟƤŻþÿϹȽƟêɅ¼ęªȁʼÂĊΒĕ®{ÔcQwõÝCáȔϣЌ¤¼ªƜȮÄіʫ̂˔ƔƳņǌ˒ȭǜɔȔąˆĲƬ˄ΊǬӊΡʰ¢Ōĥɚ¨ȨŉȕɷĨѭʶ¯͊˅΄Ǵū&quot;]],&quot;encodeOffsets&quot;:[[[106562,10641]],[[110102,21429]],[[110186,21727]],[[110564,22025]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Vietnam&quot;,&quot;childNum&quot;:4}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ŧéŉŮ~ŌȴǏ&quot;],[&quot;@@̇Ì|ȒņZǆʷ&quot;],[&quot;@@ŞŹ»đ̭ôĪƄƢT&quot;],[&quot;@@ɟsƖʾš&quot;],[&quot;@@̯ĜȠŮŐɉ&quot;],[&quot;@@Τ̓͗ėčʹǓØ¢ǐŖÞƯ&quot;],[&quot;@@ȥ_ˠƚùŹ&quot;],[&quot;@@Ä˥ɠȆŀэęř˯§ŃȎÁٜƬƹ&quot;],[&quot;@@ŻgĈĄ²àĳ&quot;],[&quot;@@ąĲöâPǓ&quot;]],&quot;encodeOffsets&quot;:[[[173560,-20009]],[[173399,-19394]],[[172489,-17963]],[[172490,-17181]],[[172336,-16728]],[[171431,-16482]],[[171942,-15806]],[[170748,-15182]],[[171607,-14603]],[[171509,-14240]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Vanuatu&quot;,&quot;childNum&quot;:10}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ϧœŨϊmŲƕ&quot;],[&quot;@@ƀȁ¡ĳʻZȱɲϐª&quot;]],&quot;encodeOffsets&quot;:[[[-175569,-14383]],[[-176469,-13788]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Samoa&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@Τv˘ġ͍ǉ·͹ǶȀƶȔß&quot;],[&quot;@@ÇĖþ½&quot;],[&quot;@@ÿÌºtą&quot;],[&quot;@@ُ̕Ź˱ʧݧίဇӳֳӳ֭Cӧ͗ԳǑोŃԳѭΝBԥǫ̷Řūɋӌ¨ΨǋˌŹެãǎǕČŢĀçˠĺ̈́˸̬ˊv֜ȒƂмǇਚĒ͚Ŀ৊ȼʽƖMʤƒŚ˲ӾתܶΦូΒजጉ&quot;]],&quot;encodeOffsets&quot;:[[[55054,12941]],[[43783,14034]],[[43815,14307]],[[54360,17048]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Yemen&quot;,&quot;childNum&quot;:4}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@ɡǘÐÊę&quot;],[&quot;@@ƾӋÃ౑ӯǶŅóĳřʇεH̹ÜM°ĻŀǓǰŁǐ³ɰ]ǺHYŐlǴxŤ~NôyòLźyΤVĠD̏଍ȽΟߙٍ଩࿋౫ફହݫկȧԻnșʣӑ¾ƩǏșIݭƴίõ׵Òʷ·ϧʭੑùё˓؇ƞĺțŤɡ[áʀɃuȧğƄæІӧݞĪĴƆǜȴīٚܧઢͭ࢔ǭͨʕ͢ʶƒ¶nŌü¶¶ļŎďƞŗöέܨǁ܎«ìÊƚȐƄφļ@Ţ@ᲄϜ̵̦٥ŷ۝ĊęߤP¨ĆȈØä²łǈɈƜÞ¦ɾ֦ɪƚȬEъʹÚsȊMŚğݐ[ʰĀͦޒĶČɠ¶°͒˼ɀ֎ֶήͮΐՊǴĘðÊĮİÆȠhZBʈ Ȭʎěɨɂ̦Uļú³ɐࣣɈ·&quot;,&quot;@@Ɯ˳͞ˑʮÒĚɜ̈́ɊlϜǨȀŶŒ²ŀĺíȖ֧ђYģkȩïůßĿÿȉÇχӡȥęŘ˅&quot;]],&quot;encodeOffsets&quot;:[[[38766,-48070]],[[32563,-24465],[27847,-30659]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;South Africa&quot;,&quot;childNum&quot;:2}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ĐŽĐđ[ûuëǾǓRį`ĞƋ̳ʣòʱģȷ[Mįàſ©ΟôǏƠҋ̓Oѯʟ̫ńĉƸˏƖÌ®Ó᠁ࠑƐշޅ­ӗʓŷҙ̩۟މࢿȭéϑĦ˳إƪɍȌɥ¨ϩݧƇঽ࡚ǵ֢A౞@˒@˒@ڠȘ@൒@ĶZåǄH²pĜØފcܔͲɑXʋފǤ¼Ή֪ɡڢÙˮ͖Βխ۶ʓŜˋƮõʆϋǀ{̒ŲȄǃjંʋÓmǅΟÎӥҌċȶɘࡢܸǟϢЀτzʦ༔ʖâǇ¾õÜÝĞ»ɰJĊð¹lûİēȶFÝlۂɥƎíÜǷŸf&quot;],&quot;encodeOffsets&quot;:[[33944,-9834]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Zambia&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ǵḀ̄TɁ}ɩʍĜȩʇYA¥ßàǍ¾aȄࡗȲ́ЬTҼͯrđ͆ࡓӀȕԌבࠂ`ƨئƩ˴ϒĥȮêފࣀ̪۠ŸҚӘʔކ®̑ڢyעͽࡐʃÑƝĮఏʗӥŴƍÓʇǸԃп֥śЏÜƉࡁࡃšđ&quot;],&quot;encodeOffsets&quot;:[[32039,-22939]]},&quot;properties&quot;:{&quot;name&quot;:&quot;Zimbabwe&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;Polygon&quot;,&quot;coordinates&quot;:[&quot;@@ڽը¿ުەߖ٬֖NΦxHޠцǒŴ\\ǔéº`Ęfú[ǜ¹~}¢ũYĨĀcĖÌ£¢áfÁnÛ½˩ƄÇÞŻ~eÖBŒvİ¤RXĩÌĄ§a÷Îŕ÷ĸȣ¡ıǽûsmQ}«»ď§řjʅõōDđ³Û«ŷ³அɘŅĭāuƕɳ`«Ī¢§NÙéõʠ{ɩɥƤǵšɇ&quot;],&quot;encodeOffsets&quot;:[[75785,34052]]},&quot;properties&quot;:{&quot;name&quot;:&quot;&quot;,&quot;childNum&quot;:1}},{&quot;geometry&quot;:{&quot;type&quot;:&quot;MultiPolygon&quot;,&quot;coordinates&quot;:[[&quot;@@͙̄͟ƹիԠύfʛϋӻýģлʫ@˭ƪǕIđmɜ\\cȝ`¥CƴˁȖƈʊƣǶɪɦʟ|öÜêO¡¨ĩ_¬ƖɴĂxĮņஆɗŸ´Ü¬Ĕ´ŌCʆöŚiĐ¨®¼P~tnǾü~Ðd¢̀ǊŰÜŀÄĒ¬Ȳ_́êǁƘ˹ҎǹÒĽȱǷ´ǡæͅìíƐĵn­ĵ§rчɃŝƑŢa¸ȵw&quot;]],&quot;encodeOffsets&quot;:[[[80376,33312]]]},&quot;properties&quot;:{&quot;name&quot;:&quot;&quot;,&quot;childNum&quot;:1}}],&quot;UTF8Encoding&quot;:true});}));</td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2" style="width:185px">
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;">
            Copy lines
          </clipboard-copy>
        </li>
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;">
            Copy permalink
          </clipboard-copy>
        </li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/apache/incubator-echarts/blame/f4fc1b0625f3c88b9f4dbed03eeb091ed6bd1079/map/js/world.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/apache/incubator-echarts/issues/new">Reference in new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get">
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>

    <div class="Popover anim-scale-in js-tagsearch-popover"
     hidden
     data-tagsearch-url="/apache/incubator-echarts/find-symbols"
     data-tagsearch-ref="4.6.0"
     data-tagsearch-path="map/js/world.js"
     data-tagsearch-lang="JavaScript"
     data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_symbol&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_symbol&quot;,&quot;repository_id&quot;:9185792,&quot;ref&quot;:&quot;4.6.0&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/apache/incubator-echarts/blob/4.6.0/map/js/world.js&quot;,&quot;user_id&quot;:33627426}}"
     data-hydro-click-hmac="8cce497afaba118d42e987a0cd7627eddc8c8713987625efd809e925c7b463de">
  <div class="Popover-message Popover-message--large Popover-message--top-left TagsearchPopover mt-1 mb-4 mx-auto Box box-shadow-large">
    <div class="TagsearchPopover-content js-tagsearch-popover-content overflow-auto" style="will-change:transform;">
    </div>
  </div>
</div>



  </div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">&copy; 2020 GitHub, Inc.</li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>

    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>
    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    <script crossorigin="anonymous" async="async" integrity="sha512-WcQmT2vhcClFVOaaAJV/M+HqsJ2Gq/myvl6F3gCVBxykazXTs+i5fvxncSXwyG1CSfcrqmLFw/R/bmFYzprX2A==" type="application/javascript" id="js-conditional-compat" data-src="https://github.githubassets.com/assets/compat-bootstrap-59c4264f.js"></script>
    <script crossorigin="anonymous" integrity="sha512-Qb7XHcWIafGt8U6FsJrxJqGCgszwjKK1zXv1+fAjIz0HDaYppswlGLxEInNMN2dlMBAZnZNSZL8wAvvhKxYx3A==" type="application/javascript" src="https://github.githubassets.com/assets/environment-bootstrap-41bed71d.js"></script>
    <script crossorigin="anonymous" async="async" integrity="sha512-327XCyOytNBlvvFRes7NYmY/gSME67CreRw+pR2DhNKBfEb2Sv0pe/XkZUSqYYlgGdDnaGIKUAb4oRZBLdKBfw==" type="application/javascript" src="https://github.githubassets.com/assets/vendor-df6ed70b.js"></script>
    <script crossorigin="anonymous" async="async" integrity="sha512-eXpQLpAhVAJMHk7Z0KCmLWkovVfHkwsEb7RddC/hfCt62wuVC8JAZUWiTeScadRGkJBFX6UxgmrE/uhItlLvqA==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-797a502e.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-SSrX6F9r7OjZSm3ncKzCEPJ5EjxOLc2MBGMs4vS8vtD87p8BNrTkek3KFUuGPB08RRu7DmofRLOA/OOy80Y2Qg==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-492ad7e8.js"></script>
    
    
    
  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>


  </body>
</html>

