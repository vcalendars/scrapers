module.exports = {
  basePage: `
<!DOCTYPE html>
<html lang="en">
<head>

  <!-- Basic Page Needs
  ================================================== -->
  <title>Rec20misc Fixtures</title>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="Fixtures">
  <meta name="keywords" content="fixtures, ladders">

  <!-- Favicons
  ================================================== -->
  <link href="https://c7b8z4a3.stackpathcdn.com/templates3/img/favicons/favicon.ico" rel="shortcut icon">
  <link href="https://c7b8z4a3.stackpathcdn.com/templates3/img/favicons/favicon-120.png" rel="apple-touch-icon" sizes="120x120">
  <link href="https://c7b8z4a3.stackpathcdn.com/templates3/img/favicons/favicon-152.png" rel="apple-touch-icon" sizes="152x152">

  <!-- Mobile Specific Metas
  ================================================== -->
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0">

  <!-- Google Web Fonts
  ================================================== -->
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700%7CSource+Sans+Pro:400,700" rel="stylesheet">

  <!-- CSS
  ================================================== -->
  <!-- Preloader CSS -->
  <!--<XlinkXhref="/templates3/css/preloader.css" rel="stylesheet">-->

  <!-- Vendor CSS -->
  <!--<XlinkXhref="/templates3/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <XlinkXhref="/templates3/fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <XlinkXhref="/templates3/fonts/simple-line-icons/css/simple-line-icons.css" rel="stylesheet">
  <XlinkXhref="/templates3/vendor/magnific-popup/dist/magnific-popup.css" rel="stylesheet">
  <XlinkXhref="/templates3/vendor/slick/slick.css" rel="stylesheet">-->

  <!-- Template CSS-->
  <!--<XlinkXhref="/templates3/css/style1567682619.css" rel="stylesheet">-->

  <!-- Custom CSS-->
  <!--<XlinkXhref="/templates3/css/custom1567682619.css" rel="stylesheet">-->

  <!-- compiled -->
  <link href="https://c7b8z4a3.stackpathcdn.com/templates3/css/styles1567682619.css" rel="stylesheet">
  
  <!-- Scripts
  ================================================== -->
  

  <!-- Additional scripts etc. -->

  <!-- Hotjar Tracking Code for https://www.volleyballsa.com.au/ -->
  <script>
	  (function(h,o,t,j,a,r){
		  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
		  h._hjSettings={hjid:1346443,hjsv:6};
		  a=o.getElementsByTagName('head')[0];
		  r=o.createElement('script');r.async=1;
		  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
		  a.appendChild(r);
	  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  </script>


</head>
<body class="template-basketball page-loader-disable">

  <div class="site-wrapper clearfix">
    <div class="site-overlay"></div>


  <!-- $nav_features = active -->

      <!-- Header
  ================================================== -->

  <!-- Header Mobile -->
  <div class="header-mobile clearfix" id="header-mobile">
    <div class="header-mobile__logo">
      <a href="/"><img src="https://c7b8z4a3.stackpathcdn.com/templates3/img/logo.png" srcset="/templates3/img/logo@2x.png 2x" alt="Volleyball South Australia" class="header-mobile__logo-img" /></a>
    </div>
    <div class="header-mobile__inner">
      <a id="header-mobile__toggle" class="burger-menu-icon"><span class="burger-menu-icon__line"></span></a>
      <span class="header-mobile__search-icon" id="header-mobile__search-icon"></span>
    </div>
  </div>

  <!-- Header Desktop -->
  <header class="header">

    <!-- Header Top Bar -->
    <div class="header__top-bar clearfix">
      <div class="container">

        <!-- Account Navigation -->
        <ul class="nav-account Site-Login">
          <li class="nav-account__item"><a href="/membership/password">Forgot password?</a></li>
          <li class="nav-account__item"><a href="#modal-login-player" data-toggle="modal" data-target="#modal-login-player">Sign in as member</a></li>
          <li class="nav-account__item"><a href="#modal-login-club" data-toggle="modal" data-target="#modal-login-club">Sign in as club</a></li>
        </ul>
        <!-- Account Navigation / End -->

      </div>
    </div>
    <!-- Header Top Bar / End -->

    <!-- Header Secondary -->
    <div class="header__secondary">
      <div class="container">
        <!-- Header Search Form -->
        <div class="header-search-form">
          <form action="/search" id="mobile-search-form" class="search-form" method="get">
            <input type="text" class="form-control header-mobile__search-control" value="" placeholder="Search&hellip;" name="q">
            <button type="submit" class="header-mobile__search-submit"><i class="fa fa-search"></i></button>
          </form>
        </div>
        <!-- Header Search Form / End -->
		<ul class="info-block info-block--header">
		  <li class="info-block__item info-block__item--contact-primary">
			<a class="info-block__link" href="/membership">
				<svg role="img" class="df-icon df-icon--join">
				  <use xlink:href="https://c7b8z4a3.stackpathcdn.com/templates3/img/icons2.svg#join"/>
				</svg>
				<h6 class="info-block__heading">Join or Renew</h6>
				<span>Sign up or renew membership</span>
			</a>
		  </li>
		  <li class="info-block__item info-block__item--contact-secondary enrol">
		  	<a class="info-block__link" href="/nominations">
				<svg role="img" class="df-icon df-icon--enrol">
				  <use xlink:href="https://c7b8z4a3.stackpathcdn.com/templates3/img/icons2.svg#enrol"/>
				</svg>
				<h6 class="info-block__heading">Enrol</h6>
				<span>Tickets and nominations</span>
			</a>
		  </li>
		  <li class="info-block__item info-block__item--contact-secondary">
		  	<a class="info-block__link" href="/contact">
				<svg role="img" class="df-icon df-icon--contact">
				  <use xlink:href="https://c7b8z4a3.stackpathcdn.com/templates3/img/icons2.svg#contact"/>
				</svg>
				<h6 class="info-block__heading">Contact Us</h6>
				<span>Get in touch with us</span>
			</a>
		  </li>
		</ul>
      </div>
    </div>
    <!-- Header Secondary / End -->

    <!-- Header Primary -->
    <div class="header__primary">
      <div class="container">
        <div class="header__primary-inner">
          <!-- Header Logo -->
          <div class="header-logo">
            <a href="/"><img src="https://c7b8z4a3.stackpathcdn.com/templates3/img/logo.png" alt="Volleyball South Australia" srcset="/templates3/img/logo@2x.png 2x" class="header-logo__img"></a>
          </div>
          <!-- Header Logo / End -->

          <!-- Main Navigation -->
          <nav class="main-nav clearfix">
		    
<ul class="main-nav__list">
						<li class="">
				<a href="#">Get into volleyball</a>
				<div class="main-nav__megamenu clearfix">
											<ul class="col-lg-3 col-md-3 col-xs-12 main-nav__ul">
							<li class="main-nav__title">Play</li>
															<li>
									<a href="/holidayclinics">
										Beginner programs and clinics																					<span class="slide-menu-ctl" onclick="slide_menu(this); return false;"></span>
																			</a>
																			<ul class="slide-menu">
																							<li><a href="/get-into-volleyball/program-signup">Register to get a contact</a></li>
																							<li><a href="/junior/spikezone">Clinics &amp; Competitions</a></li>
																							<li><a href="http://www.volleyballsa.com.au/sportingschools">Sporting Schools Program</a></li>
																					</ul>									
																	</li>
															<li>
									<a href="/get-into-volleyball/beach">
										Beach																					<span class="slide-menu-ctl" onclick="slide_menu(this); return false;"></span>
																			</a>
																			<ul class="slide-menu">
																							<li><a href="/get-into-volleyball/beach">Fun &amp; Social</a></li>
																							<li><a href="/sabvs">Learn and Compete</a></li>
																					</ul>									
																	</li>
															<li>
									<a href="/get-into-volleyball/indoor/social">
										Indoor																					<span class="slide-menu-ctl" onclick="slide_menu(this); return false;"></span>
																			</a>
																			<ul class="slide-menu">
																							<li><a href="/get-into-volleyball/indoor/social">Fun &amp; Social</a></li>
																							<li><a href="/get-into-volleyball/join-a-club">Learn and Compete</a></li>
																					</ul>									
																	</li>
															<li>
									<a href="/get-into-volleyball/park">
										Park																			</a>
																	</li>
															<li>
									<a href="/get-into-volleyball/sitting">
										Sitting																			</a>
																	</li>
															<li>
									<a href="/get-into-volleyball/join-a-club">
										Join a club																					<span class="slide-menu-ctl" onclick="slide_menu(this); return false;"></span>
																			</a>
																			<ul class="slide-menu">
																							<li><a href="/get-into-volleyball/join-a-club">Join a SA Volleyball League Club</a></li>
																							<li><a href="/affiliateclubs">Join an Affiliate Club</a></li>
																					</ul>									
																	</li>
															<li>
									<a href="/upcomingevents">
										Upcoming Events																			</a>
																	</li>
													</ul>
											<ul class="col-lg-3 col-md-3 col-xs-12 main-nav__ul">
							<li class="main-nav__title">Coach and Referee</li>
															<li>
									<a href="/get-into-volleyball/coaching-and-refereeing">
										Overview																			</a>
																	</li>
															<li>
									<a href="/get-into-volleyball/coaching">
										Coaching																			</a>
																	</li>
															<li>
									<a href="/get-into-volleyball/refereeing">
										Refereeing																			</a>
																	</li>
													</ul>
											<ul class="col-lg-3 col-md-3 col-xs-12 main-nav__ul">
							<li class="main-nav__title">Volunteer</li>
															<li>
									<a href="/get-into-volleyball/volunteer">
										Overview																			</a>
																	</li>
															<li>
									<a href="https://form.jotform.co/81698039861874">
										Sign Up																			</a>
																	</li>
													</ul>
					
					<div class="col-lg-3 col-md-3 col-xs-12">
						

	<ul class="posts posts--simple-list">
					<li class="posts__item posts__item--category-1">
				<figure class="posts__thumb">
											<a href="/news/article?newsid=306"><img src="https://c7b8z4a3.stackpathcdn.com/assets/news/306/icon/aaa%20xmas.jpg" alt="" width="80" /></a>
									</figure>
				<div class="posts__inner">
					<div class="posts__cat">
		<span class="label posts__cat-label posts__item--category-people">Our People</span>
	</div>
					<h6 class="posts__title"><a href="/news/article?newsid=306">VSA Christmas Office Hours</a></h6>
					<time datetime="2019-12-19" class="posts__date">19th December, 2019</time>
				</div>
			</li>
					<li class="posts__item posts__item--category-1">
				<figure class="posts__thumb">
											<a href="/news/article?newsid=305"><img src="https://c7b8z4a3.stackpathcdn.com/assets/news/305/icon/SSF19_Thurs_VSA-3095.jpg" alt="" width="80" /></a>
									</figure>
				<div class="posts__inner">
					<div class="posts__cat">
		<span class="label posts__cat-label posts__item--category-people">Our People</span>
	</div>
					<h6 class="posts__title"><a href="/news/article?newsid=305">Legend Sportswear SA Open - Referee &amp; Official Opportunities</a></h6>
					<time datetime="2019-12-18" class="posts__date">18th December, 2019</time>
				</div>
			</li>
					<li class="posts__item posts__item--category-1">
				<figure class="posts__thumb">
											<a href="/news/article?newsid=303"><img src="https://c7b8z4a3.stackpathcdn.com/assets/news/303/icon/49348371_10156114207416404_7997959064908726272_o.jpg" alt="" width="80" /></a>
									</figure>
				<div class="posts__inner">
					<div class="posts__cat">
		<span class="label posts__cat-label posts__item--category-people">Our People</span>
	</div>
					<h6 class="posts__title"><a href="/news/article?newsid=303">Legend Sportswear SA Open 2020</a></h6>
					<time datetime="2019-12-04" class="posts__date">4th December, 2019</time>
				</div>
			</li>
			</ul>






					</div>
				</div>
			</li>
								<li class="">
				<a href="#">Play</a>
									<ul class="main-nav__sub">
													<li><a href="/junior">Junior</a>								<ul class="main-nav__sub-2">
									                        				<li><a href="/junior">Welcome</a></li>
                        			                        				<li><a href="/junior/spikezone">SPIKEZONE</a></li>
                        			                        				<li><a href="/summerleague">Summer Leagues</a></li>
                        			                        				<li><a href="/sabvs">Beach Series</a></li>
                        			                        				<li><a href="/junior/savsc">Schools Cup</a></li>
                        			                        				<li><a href="/schoolsbeach">Beach Festivals</a></li>
                        			                        				<li><a href="/psc">Schools Carnival</a></li>
                        			                        		</ul>
                        		</li>
													<li><a href="/social">Social</a>								<ul class="main-nav__sub-2">
									                        				<li><a href="/social">Welcome</a></li>
                        			                        				<li><a href="/social/latest">Latest</a></li>
                        			                        				<li><a href="/social/indoor/fixtures">Indoor</a></li>
                        			                        				<li><a href="/social/beach/fixtures">Beach</a></li>
                        			                        				<li><a href="/social/training">Training</a></li>
                        			                        				<li><a href="/social/events">Events</a></li>
                        			                        				<li><a href="/amg19">Australian Masters Games</a></li>
                        			                        				<li><a href="/social/sunset-volley">Sunset Volley</a></li>
                        			                        		</ul>
                        		</li>
											</ul>
							</li>
								<li class="">
				<a href="#">Compete</a>
									<ul class="main-nav__sub">
													<li><a href="/savl">SA Volleyball League (SAVL)</a>								<ul class="main-nav__sub-2">
									                        				<li><a href="/savl">Latest</a></li>
                        			                        				<li><a href="/savl/fixtures">Fixtures</a></li>
                        			                        				<li><a href="/savl/results">Results</a></li>
                        			                        				<li><a href="/savl/tables">Tables</a></li>
                        			                        				<li><a href="/savl/docs">Docs</a></li>
                        			                        				<li><a href="/savl/gallery">Gallery</a></li>
                        			                        		</ul>
                        		</li>
													<li><a href="/junior/league">SAVL Junior Divisions</a>								<ul class="main-nav__sub-2">
									                        				<li><a href="/junior/league">Welcome</a></li>
                        			                        				<li><a href="/savl">Latest</a></li>
                        			                        				<li><a href="/junior/league/results">Results</a></li>
                        			                        				<li><a href="/junior/league/fixtures">Fixtures</a></li>
                        			                        				<li><a href="/junior/league/tables">Tables</a></li>
                        			                        				<li><a href="/savl/docs">Docs</a></li>
                        			                        				<li><a href="/savl/gallery">Gallery</a></li>
                        			                        		</ul>
                        		</li>
													<li><a href="/sabvs">SA Beach Volleyball Series</a>								<ul class="main-nav__sub-2">
									                        				<li><a href="/sabvs">Overview</a></li>
                        			                        				<li><a href="/sabvs/info">Series Information</a></li>
                        			                        				<li><a href="/sabvs/results">Results</a></li>
                        			                        				<li><a href="/sabvs/rules">Rules &amp; Regulations</a></li>
                        			                        				<li><a href="/summersetsfestival">LEGEND SSF/SA OPEN</a></li>
                        			                        				<li><a href="/sabvs/sa-open">SA Open</a></li>
                        			                        		</ul>
                        		</li>
											</ul>
							</li>
								<li class="">
				<a href="#">Perform</a>
									<ul class="main-nav__sub">
													<li><a href="/state-teams">State Teams</a>								<ul class="main-nav__sub-2">
									                        				<li><a href="/storm19">Adelaide Storm Team Info</a></li>
                        			                        				<li><a href="/state-teams">Overview</a></li>
                        			                        				<li><a href="/state-teams/beach">Beach</a></li>
                        			                        				<li><a href="/state-teams/indoor">Indoor</a></li>
                        			                        		</ul>
                        		</li>
													<li><a href="/vsa-academy">Academy</a>								<ul class="main-nav__sub-2">
									                        				<li><a href="/vsa-academy">Overview</a></li>
                        			                        				<li><a href="/vsa-academy/trial-info">Trial Information</a></li>
                        			                        				<li><a href="/vsa-academy/emerging-talent-training-squad">Emerging Talent Squad</a></li>
                        			                        				<li><a href="/vsa-academy/development-training-squad">Development Squad</a></li>
                        			                        				<li><a href="/vsa-academy/intensive-training-squad">Intensive Squad</a></li>
                        			                        				<li><a href="/vsa-academy/placement-holders">Placement Holders</a></li>
                        			                        				<li><a href="/vsa-academy/staff">Staff</a></li>
                        			                        		</ul>
                        		</li>
													<li><a href="/sssa">U16 SSSA</a></li>
											</ul>
							</li>
								<li class="">
				<a href="/pages/60">Info</a>
									<ul class="main-nav__sub">
													<li><a href="/staff">The Team</a>								<ul class="main-nav__sub-2">
									                        				<li><a href="/staff1">Staff</a></li>
                        			                        				<li><a href="/board">Board</a></li>
                        			                        		</ul>
                        		</li>
													<li><a href="/sponsors">Sponsors and Partners</a></li>
													<li><a href="/policies">Policies &amp; Governance</a></li>
													<li><a href="/employment">Employment</a></li>
													<li><a href="/affiliation">Affiliation</a></li>
													<li><a href="/venuehire">Venue Hire</a></li>
													<li><a href="/contact">Contact Us</a></li>
													<li><a href="/assets/downloads/VSA CALENDAR 2019 20190715.pdf">2019 Calendar</a></li>
											</ul>
							</li>
								<li class="">
				<a href="/ADL_Storm">Storm Fans</a>
									<ul class="main-nav__sub">
													<li><a href="https://www.volleyballsa.com.au/news/article?newsid=298">Round 2</a></li>
													<li><a href="https://www.volleyballsa.com.au/news/article?newsid=299">Round 3</a></li>
											</ul>
							</li>
			</ul>


            <!-- Social Links -->
            <ul class="social-links social-links--inline social-links--main-nav">
              <li class="social-links__item">
                <a href="https://www.facebook.com/VolleyballSA/" class="social-links__link" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i class="fa fa-facebook"></i></a>
              </li>
              <li class="social-links__item">
                <a href="https://twitter.com/#VolleyballSA1" class="social-links__link" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i class="fa fa-twitter"></i></a>
              </li>
              <li class="social-links__item">
                <a href="https://www.instagram.com/volleyball_sa/" class="social-links__link" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i class="fa fa-instagram"></i></a>
              </li>
            </ul>
            <!-- Social Links / End -->

            <!-- Pushy Panel Toggle -->
            <a href="#" class="pushy-panel__toggle">
              <span class="pushy-panel__line"></span>
            </a>
            <!-- Pushy Panel Toggle / Eng -->
          </nav>
          <!-- Main Navigation / End -->
        </div>
      </div>
    </div>
    <!-- Header Primary / End -->

  </header>
  <!-- Header / End -->

  <!-- Pushy Panel -->
<aside class="pushy-panel">
  <div class="pushy-panel__inner">
    <header class="pushy-panel__header">
      <div class="pushy-panel__logo">
        <a href="/"><img src="https://c7b8z4a3.stackpathcdn.com/templates3/img/logok.png" srcset="/templates3/img/logok@2x.png 2x" alt="Volleyball SA"></a>
      </div>
    </header>
    <div class="pushy-panel__content">
		
 
	<aside class="widget widget--side-panel">
		<div class="widget__content">
			<ul class="posts posts--simple-list posts--simple-list--lg">
								<li class="posts__item posts__item--category-1">
					<div class="posts__inner">
						<div class="posts__cat">
		<span class="label posts__cat-label posts__item--category-people">Our People</span>
	</div>
 
						<h6 class="posts__title">
							<a href="/news/article?newsid=306">VSA Christmas Office Hours</a>
						</h6>
						<time datetime="2019-12-19" class="posts__date">19th December, 2019					</time>
						<div class="posts__excerpt">Information regarding VSAs closures over the Christmas/Summer Sets period.</div>
					</div>
				</li>
								<li class="posts__item posts__item--category-1">
					<div class="posts__inner">
						<div class="posts__cat">
		<span class="label posts__cat-label posts__item--category-people">Our People</span>
	</div>
 
						<h6 class="posts__title">
							<a href="/news/article?newsid=305">Legend Sportswear SA Open - Referee &amp; Official Opportunities</a>
						</h6>
						<time datetime="2019-12-18" class="posts__date">18th December, 2019					</time>
						<div class="posts__excerpt">Volleyball SA are looking for NTO's for the 2019 SA Open taking place on the 10th-12th January at Glenelg Beach.</div>
					</div>
				</li>
								<li class="posts__item posts__item--category-1">
					<div class="posts__inner">
						<div class="posts__cat">
		<span class="label posts__cat-label posts__item--category-people">Our People</span>
	</div>
 
						<h6 class="posts__title">
							<a href="/news/article?newsid=304">VA Beach Volleyball Officials EOI</a>
						</h6>
						<time datetime="2019-12-12" class="posts__date">12th December, 2019					</time>
						<div class="posts__excerpt">Expression of interest for officials - Volleyball Australia Beach Volleyball Events 2020</div>
					</div>
				</li>
							</ul>
		</div>
	</aside>





    </div>
    <a href="#" class="pushy-panel__back-btn"></a>
  </div>
</aside>
<!-- Pushy Panel / End -->





        <!-- Page Heading
    ================================================== -->

    <div class="page-heading" style="background-image:url(/templates3/img/headers/social_indoor.jpg)">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-md-offset-1">
            <h1 class="page-heading__title">Social Indoor</h1>
            <ol class="page-heading__breadcrumb breadcrumb">
              <li><a href="/">Home</a></li>
              <li><a href="/social">Social</a></li>
              <li class="base"><a href="/social/indoor/fixtures">Indoor</a></li>
              <li class="active"></li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!-- Player Pages Filter -->
    <nav class="content-filter">
      <div class="container">
        <a href="#" class="content-filter__toggle"></a>
        
	<ul class="content-filter__list">
					<li class="content-filter__item ">
				<a href="/social/indoor/fixtures" class="content-filter__link">
					<small>Social Indoor</small>
					<span>Fixtures</span>
				</a>
			</li>
					<li class="content-filter__item ">
				<a href="/social/indoor/results" class="content-filter__link">
					<small>Social Indoor</small>
					<span>Results</span>
				</a>
			</li>
					<li class="content-filter__item ">
				<a href="/social/indoor/tables" class="content-filter__link">
					<small>Social Indoor</small>
					<span>Tables</span>
				</a>
			</li>
					<li class="content-filter__item ">
				<a href="/social/indoor/docs" class="content-filter__link">
					<small>Social Indoor</small>
					<span>Docs</span>
				</a>
			</li>
					<li class="content-filter__item ">
				<a href="/social/indoor/gallery" class="content-filter__link">
					<small>Social Indoor</small>
					<span>Gallery</span>
				</a>
			</li>
			</ul>

      </div>
    </nav>
    <!-- Player Pages Filter / End -->



    <!-- Content
    ================================================== -->
    <div class="site-content">
      <div class="container">
        <div class="row">

          <div class="content col-md-8">
			<h4 class="am_Tag"><span style="color: #000000;">WEATHER CANCELLATIONS POSTED HERE AT 4.50PM FOR OUTDOOR EVENING COMPETITIONS (DAY OF COMPETITION)</span></h4><h5 class="am_Tag"><span style="background-color: #f1c40f;">No current cancellations</span></h5><div class="am_Tag">
	<div class="card card__filter">
		
		<div class="card__content card__header">
			<form method="get" class="fixtures">
				<p>
										<label>Select a grade:
						<select id="fixtures-grade" name="grade" class="form-control" size="1" onchange="this.form.className+=' loading';this.form.submit()"><option value="414">Henley / A</option><option value="415">Pt Noarlunga / A</option></select></label>

									</p>
			</form>
		</div>
	</div>
	
	
	<div class="card card--has-table">
		<div class="card__header card__header--has-btn">
			<h2>Henley / A</h2>

		<a href="/social/indoor/fixtures/club" class="btn btn-default btn-outline btn-xs card-header__button">Filter by club</a> &nbsp; <a href="/social/indoor/results?grade=414" class="btn btn-default btn-outline btn-xs card-header__button">View results</a> &nbsp; <a href="/social/indoor/tables?grade=414" class="btn btn-default btn-outline btn-xs card-header__button">View tables</a>	</div>

	<div class="table-responsive">
		<table class="table table-hover team-schedule team-schedule--full x-fixtures">
			<thead>
							<tr class="empty" id="earlier-rounds">
					<td class="team-schedule__show-earlier" colspan="999">
						<label class="checkbox checkbox-inline">
							<input type="checkbox" onclick="return view_earlier_fixtures(this)" data-alt-text="Hide earlier rounds" data-text="Show earlier rounds" />
							<span class="checkbox-indicator"></span>
							<span>Show earlier rounds</span>
						</label>
					</td>
				</tr>
							<tr>
					<th class="team-schedule__date">Date</th>
					<th class="team-schedule__versus">Match</th>
					<th class="team-schedule__duty">Duty Team</th>
					<th class="team-schedule__venue">Venue</th>
					<th class="team-schedule__time">Time</th>
				</tr>
			</thead>
			<tbody>
								<tr class="round past" style="display:none;">
						<th class="team-schedule__round" colspan="999">Round 1</th>
					</tr>
										<tr class="result past" style="display:none;">
						<td class="team-schedule__date">
							Wednesday, Jan 15													</td>
						<td class="team-schedule__versus">
														<b>Lunchcutters</b> <span>v</span> <b>Bombers Torps</b>

																																											</td>
						<td class="team-schedule__duty"></td>
						<td class="team-schedule__venue">Henley Beach / Court 1</td>
						<td class="team-schedule__time">18:00pm</td>
					</tr>
										<tr class="result past" style="display:none;">
						<td class="team-schedule__date">
							Wednesday, Jan 15													</td>
						<td class="team-schedule__versus">
														<b>Anenomies</b> <span>v</span> <b>Wolf Cherry</b>

																																											</td>
						<td class="team-schedule__duty"></td>
						<td class="team-schedule__venue">Henley Beach / Court 1</td>
						<td class="team-schedule__time">18:45pm</td>
					</tr>
										<tr class="result last past" style="display:none;">
						<td class="team-schedule__date">
							Wednesday, Jan 15													</td>
						<td class="team-schedule__versus">
														<b>Rally Team, Rall</b> <span>v</span> <b>Stingrays</b>

																																											</td>
						<td class="team-schedule__duty"></td>
						<td class="team-schedule__venue">Henley Beach / Court 2</td>
						<td class="team-schedule__time">18:45pm</td>
					</tr>
										<tr class="round">
						<th class="team-schedule__round" colspan="999">Round 2</th>
					</tr>
										<tr class="result">
						<td class="team-schedule__date">
							Wednesday, Jan 22													</td>
						<td class="team-schedule__versus">
														<b>Bombers Torps</b> <span>v</span> <b>Rally Team, Rall</b>

																																											</td>
						<td class="team-schedule__duty"></td>
						<td class="team-schedule__venue">Henley Beach / Court 1</td>
						<td class="team-schedule__time">18:00pm</td>
					</tr>
										<tr class="result last">
						<td class="team-schedule__date">
							Wednesday, Jan 22													</td>
						<td class="team-schedule__versus">
														<b>Lunchcutters</b> <span>v</span> <b>Wolf Cherry</b>

																																											</td>
						<td class="team-schedule__duty"></td>
						<td class="team-schedule__venue">Henley Beach / Court 2</td>
						<td class="team-schedule__time">18:00pm</td>
					</tr>
										<tr class="result">
						<td class="team-schedule__date">
							Wednesday, Jan 22													</td>
						<td class="team-schedule__versus">
														<b>Anenomies</b> <span>v</span> <b>Stingrays</b>

																																											</td>
						<td class="team-schedule__duty"></td>
						<td class="team-schedule__venue">Henley Beach / Court 1</td>
						<td class="team-schedule__time">18:45pm</td>
					</tr>
								</tbody>
		</table>
	</div>
	</div>

	<script type="application/javascript">
		if (typeof(view_earlier_fixtures) === 'undefined') {
			function view_earlier_fixtures(el)
			{
				var parent = el.parentNode;
				while (parent.nodeName.toUpperCase() !== 'TABLE') {
					parent = parent.parentNode;
				}
				parent.getElementsByTagName('TBODY')[0];
				var label = el.parentNode.getElementsByTagName('SPAN')[0];
				var show = el.checked;
				var earlier_rows = parent.getElementsByClassName('past');
				for (var i = 0; i < earlier_rows.length; i++) {
					earlier_rows[i].style.display = show ? 'table-row' : 'none';
				}
				return el.show;
			}
		}
	</script>

	</div><p>Older fixtures are available in our <a href="/social/indoor/fixtures/archives">our archives</a></p>
          </div>

          <div class="sidebar sidebar--member col-md-4">
			

	
		<aside class="widget card widget--sidebar widget-standings">
			<div class="widget__title card__header card__header--has-btn">
				<h4>Henley / A Table</h4>
									<a href="tables" class="btn btn-default btn-outline btn-xs card-header__button">See Full Table</a>
							</div>
			<div class="widget__content card__content">
				
<div class="table-responsive">
	<table class="table table-hover table-standings">
		<thead>
		<tr>
			<th>Team Positions</th>
			<th title="Played">P</th>
			<th title="Won">W</th>
			<th tilte="Lost">L</th>
			<th title="Points">Pts.</th>
		</tr>
		</thead>
		<tbody>
					<tr>
				<td>
					<div class="team-meta">
						<div class="team-meta__info">
							<h6 class="team-meta__name">Lunchcutters</h6>
						</div>
					</div>
				</td>
				<td>1</td>
				<td>1</td>
				<td>0</td>
				<td>10</td>
			</tr>
					<tr>
				<td>
					<div class="team-meta">
						<div class="team-meta__info">
							<h6 class="team-meta__name">Stingrays</h6>
						</div>
					</div>
				</td>
				<td>1</td>
				<td>1</td>
				<td>0</td>
				<td>10</td>
			</tr>
					<tr>
				<td>
					<div class="team-meta">
						<div class="team-meta__info">
							<h6 class="team-meta__name">Wolf Cherry</h6>
						</div>
					</div>
				</td>
				<td>1</td>
				<td>1</td>
				<td>0</td>
				<td>10</td>
			</tr>
					<tr>
				<td>
					<div class="team-meta">
						<div class="team-meta__info">
							<h6 class="team-meta__name">Anenomies</h6>
						</div>
					</div>
				</td>
				<td>1</td>
				<td>0</td>
				<td>1</td>
				<td>0</td>
			</tr>
					<tr>
				<td>
					<div class="team-meta">
						<div class="team-meta__info">
							<h6 class="team-meta__name">Rally Team, Rall</h6>
						</div>
					</div>
				</td>
				<td>1</td>
				<td>0</td>
				<td>1</td>
				<td>0</td>
			</tr>
					<tr>
				<td>
					<div class="team-meta">
						<div class="team-meta__info">
							<h6 class="team-meta__name">Bombers Torps</h6>
						</div>
					</div>
				</td>
				<td>1</td>
				<td>0</td>
				<td>1</td>
				<td>0</td>
			</tr>
				</tbody>
	</table>
</div>

			</div>
		</aside>

	
	
            
			<!-- Widget: Social Buttons -->
<aside class="widget widget--sidebar widget-social">
  <a href="https://www.facebook.com/VolleyballSA/" class="btn-social-counter btn-social-counter--fb" target="_blank" style="padding-top:25px">
    <div class="btn-social-counter__icon">
      <i class="fa fa-facebook"></i>
    </div>
    <h6 class="btn-social-counter__title">Like Our Facebook Page</h6>
    <!--<span class="btn-social-counter__count"><span class="btn-social-counter__count-num"></span> Likes</span>-->
    <span class="btn-social-counter__add-icon"></span>
  </a>
  <a href="https://twitter.com/volleyballsa1" class="btn-social-counter btn-social-counter--twitter" target="_blank" style="padding-top:25px">
    <div class="btn-social-counter__icon">
      <i class="fa fa-twitter"></i>
    </div>
    <h6 class="btn-social-counter__title">Follow Us on Twitter</h6>
    <!--<span class="btn-social-counter__count"><span class="btn-social-counter__count-num"></span> Followers</span>-->
    <span class="btn-social-counter__add-icon"></span>
  </a>
  <a href="https://www.instagram.com/volleyball_sa/" class="btn-social-counter btn-social-counter--instagram" target="_blank" style="padding-top:25px">
    <div class="btn-social-counter__icon">
      <i class="fa fa-instagram"></i>
    </div>
    <h6 class="btn-social-counter__title">Follow Us on Instagram</h6>
    <!--<span class="btn-social-counter__count"><span class="btn-social-counter__count-num"></span> Followers</span>-->
    <span class="btn-social-counter__add-icon"></span>
  </a>
</aside>
<!-- Widget: Social Buttons / End -->

          </div>

        </div>
      </div>
    </div>

    <!-- Content / End -->

    <!-- Footer
================================================== -->
<footer id="footer" class="footer">

  <!-- Footer Widgets -->
  <div class="footer-widgets">
    <div class="footer-widgets__inner">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-3">
            <div class="footer-col-inner">

              <!-- Footer Logo -->
              <div class="footer-logo">
                <a href="/"><img src="https://c7b8z4a3.stackpathcdn.com/templates3/img/logo.png" srcset="/templates3/img/logo@2x.png 2x" alt="Alchemists" class="footer-logo__img"></a>
              </div>
              <!-- Footer Logo / End -->

            </div>
          </div>
          <div class="col-sm-4 col-md-3">
            <div class="footer-col-inner">
              <!-- Widget: Contact Info -->
              <div class="widget widget--footer widget-contact-info">
                <h4 class="widget__title">Get Involved</h4>
                <div class="widget__content">
                  <div class="widget-contact-info__desc">
                    <p>Volleyball SA, home of volleyball in&nbsp;South&nbsp;Australia.</p>
                  </div>
                  <div class="widget-contact-info__body info-block">
                    <div class="info-block__item">
					  <a class="info-block__link" href="/membership">
						  <svg role="img" class="df-icon df-icon--join">
							<use xlink:href="https://c7b8z4a3.stackpathcdn.com/templates3/img/icons2.svg#join"/>
						  </svg>
						  <h6 class="info-block__heading">Join or Renew</h6>
						  <span>Sign up or renew membership</span>
					  </a>
                    </div>
                    <div class="info-block__item">
					  <a class="info-block__link" href="/nominations">
						  <svg role="img" class="df-icon df-icon--enrol">
							<use xlink:href="https://c7b8z4a3.stackpathcdn.com/templates3/img/icons2.svg#enrol"/>
						  </svg>
						  <h6 class="info-block__heading">Enrol</h6>
						  <span>Tickets and nominations</span>
					  </a>
                    </div>
                    <div class="info-block__item">
					  <a class="info-block__link" href="/contact">
						  <svg role="img" class="df-icon df-icon--contact">
							<use xlink:href="https://c7b8z4a3.stackpathcdn.com/templates3/img/icons2.svg#contact"/>
						  </svg>
						  <h6 class="info-block__heading">Contact Us</h6>
						  <span>Get in touch with us</span>
					  </a>
                    </div>
                    <div class="info-block__item info-block__item--nopadding">
                      <ul class="social-links">
                        <li class="social-links__item">
                          <a href="https://www.facebook.com/VolleyballSA/" class="social-links__link"><i class="fa fa-facebook"></i> Facebook</a>
                        </li>
                        <li class="social-links__item">
                          <a href="https://twitter.com/#VolleyballSA1" class="social-links__link"><i class="fa fa-twitter"></i> Twitter</a>
                        </li>
                        <li class="social-links__item">
                          <a href="https://www.instagram.com/volleyball_sa/" class="social-links__link"><i class="fa fa-instagram"></i> Instagram</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Widget: Contact Info / End -->
            </div>
          </div>
          <div class="col-sm-4 col-md-3">
            <div class="footer-col-inner">
            	
	<div class="widget widget--footer widget-popular-posts">
		<h4 class="widget__title">Latest News</h4>
		<div class="widget__content">
			<ul class="posts posts--simple-list">
									<li class="posts__item posts__item--category-1">
						<div class="posts__cat">
		<span class="label posts__cat-label posts__item--category-people">Our People</span>
	</div>
						<h6 class="posts__title"><a href="/news/article?newsid=306">VSA Christmas Office Hours</a></h6>
						<time datetime="2019-12-19" class="posts__date">19th December, 2019</time>
					</li>
									<li class="posts__item posts__item--category-1">
						<div class="posts__cat">
		<span class="label posts__cat-label posts__item--category-people">Our People</span>
	</div>
						<h6 class="posts__title"><a href="/news/article?newsid=305">Legend Sportswear SA Open - Referee &amp; Official Opportunities</a></h6>
						<time datetime="2019-12-18" class="posts__date">18th December, 2019</time>
					</li>
									<li class="posts__item posts__item--category-1">
						<div class="posts__cat">
		<span class="label posts__cat-label posts__item--category-people">Our People</span>
	</div>
						<h6 class="posts__title"><a href="/news/article?newsid=304">VA Beach Volleyball Officials EOI</a></h6>
						<time datetime="2019-12-12" class="posts__date">12th December, 2019</time>
					</li>
							</ul>
		</div>
	</div>




            </div>
          </div>
          <div class="col-sm-4 col-md-3">
            <div class="footer-col-inner">

              <!-- @import "../widgets/footer-widget-instagram.kit" -->

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer Widgets / End -->

  <!-- Footer Secondary -->
  <div class="footer-secondary footer-secondary--has-decor">
    <div class="container">
      <div class="footer-secondary__inner">
        <div class="row">
          <div class="col-md-10 col-md-offset-1">
            <ul class="footer-nav">
              <li class="footer-nav__item"><a href="/">Home</a></li>
              <li class="footer-nav__item"><a href="/membership">Membership</a></li>
              <li class="footer-nav__item"><a href="/nominations">Enrol</a></li>
              <li class="footer-nav__item"><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer Secondary / End -->
</footer>
<!-- Footer / End -->


<!-- Login Modal -->
<div class="modal fade" id="modal-login-player" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-lg modal--login" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">

        <div class="modal-account-holder">
          <div class="modal-account__item">

            <!-- Login Form -->
            <form action="/admin/login" class="modal-form login player" method="post" autocomplete="off">
              <h5>Login to your account</h5>
              <div class="alert alert-warning sml hidden">
		          <strong>Invalid username or password — please try again or try our <a href="/membership/password">Password Reset</a> facility</strong>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Enter your membership number..." name="username" autocomplete="off">
              </div>
              <div class="form-group form-group--password-forgot">
                 <span class="password-reminder">
                 	Don’t know your membership number? <a href="/membership/find-number">You can search for it</a><br />
                 </span>
              </div>
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Enter your password..." name="password" autocomplete="off">
              </div>
              <div class="form-group form-group--password-forgot">
                 <span class="password-reminder">
                 	Forgot your password? <a href="/membership/password">You can reset it</a>
                 </span>
              </div>
              <div class="form-group form-group--submit">
              	<input type="hidden" name="login" value="member" />
                <button type="submit" class="btn btn-primary-inverse btn-block">Login to your account</button>
              </div>
            </form>
            <!-- Login Form / End -->

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Login Modal / End -->

<!-- Login Clubs Modal -->
<div class="modal fade" id="modal-login-club" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-lg modal--login" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">

        <div class="modal-account-holder">
          <div class="modal-account__item">

            <!-- Login Form -->
            <form action="/admin/login" class="modal-form login club" method="post">
              <h5>Login to your club console</h5>
              <div class="alert alert-warning sml hidden">
		          <strong>Invalid username or password — please try again or try our <a href="/membership/password">Password Reset</a> facility</strong>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Enter your club ID..." name="username">
              </div>
              <div class="form-group form-group--password-forgot">
                 <span class="password-reminder">
                 	Don’t know your club ID? <a href="/contact">Contact us</a>
                 </span>
              </div>
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Enter your club password..." name="password">
              </div>
              <div class="form-group form-group--password-forgot">
                 <span class="password-reminder">
                 	Forgot your password? <a href="/membership/password">You can reset it</a>
                 </span>
              </div>
              <div class="form-group form-group--submit">
              	<input type="hidden" name="login" value="club" />
                <button type="submit" class="btn btn-primary-inverse btn-block">Login to your club console</button>
              </div>
            </form>
            <!-- Login Form / End -->

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Login Clubs Modal / End -->


  </div>

  <!-- Javascript Files
================================================== -->
<!-- Core JS -->
<!--<XscriptXsrc="/templates3/vendor/jquery/jquery.min.js"></script>
<script src="https://c7b8z4a3.stackpathcdn.com/templates3/js/core-min.js"></script>-->

<!-- Vendor JS -->
<!-- X<script src="https://c7b8z4a3.stackpathcdn.com/templates3/vendor/twitter/jquery.twitter.js"></script>-->
<!-- $gmap_scripts? -->

<!-- Template JS -->
<!--<XscriptXsrc="/templates3/js/init.js"></script>
<XscriptXsrc="/templates3/js/custom1567682619.js"></script>-->

<!-- compiled -->
<script async src="https://c7b8z4a3.stackpathcdn.com/templates3/js/scripts1567682619.js"></script>

<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.12';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<script type="text/javascript">var _gaq = _gaq || [];_gaq.push(['_setAccount', 'UA-16530937-1']);_gaq.push(['_trackPageview']);(function() {var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();</script>

<script type="text/javascript">document.write(unescape("%3Cscript src='/admin/js?page_id=113\u0026r="+(Math.floor(Math.random()*1000000))+"' type='text/javascript'%3E%3C/script%3E"));</script>
</body>
</html>
`,
};
