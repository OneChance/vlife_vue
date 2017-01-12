<template id="template-home">
<div>
	<nav class="navbar navbar-default navbar-fixed-top">
		<div class="container">
			<div class="navbar-header page-scroll">
				<button type="button" class="navbar-toggle" data-toggle="collapse"
				data-target="#bs-example-navbar-collapse-1">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand">reincarnate</a>
			</div>
			<div class="collapse navbar-collapse"
				id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav navbar-right">
					
				</ul>
			</div>
		</div>
	</nav>
	<header>
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<p class="page-scroll">
						<img class="img-responsive"
					:src="require('../images/profile.png')" alt="" style="cursor: pointer;"></p>
					<div class="intro-text">
						<span class="name"></span>
						<hr class="star-light">
						<span class="skills">
							<div class="timer">
								<div class="days-wrapper">
									<span class="days"></span>
									<br>
								</div>
								<div class="hours-wrapper">
									<span class="hours"></span>
									<br>
									
								</div>
								<div class="minutes-wrapper">
									<span class="minutes"></span>
									<br>
									
								</div>
								<div class="seconds-wrapper">
									<span class="seconds"></span>
									<br>
								</div>
							</div>
							<div id="reincarnateButton" class="col-xs-12 reincarnate-button" v-if="completeLife">
								<a class="btn btn-primary btn-lg portfolio-link"></a>
							</div>
						</span>
					</div>
				</div>
			</div>
		</div>
	</header>
	<section id="portfolio">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2>
					
					</h2>
				<hr class="star-primary"></div>
			</div>
			<div class="row">
				<div class="col-sm-4 portfolio-item">
					<a class="portfolio-link game-page">
						<div class="caption">
							<div class="caption-content"> <i class="fa fa-search-plus fa-3x"></i>
							</div>
						</div>
					<img :src="require('../images/portfolio/cabin.png')" class="img-responsive" alt=""></a>
				</div>
				<div class="col-sm-4 portfolio-item">
					<a href="#action" class="portfolio-link game-page"
						data-toggle="modal">
						<div class="caption">
							<div class="caption-content"> <i class="fa fa-search-plus fa-3x"></i>
							</div>
						</div>
						<img :src="require('../images/portfolio/cake.png')"
					class="img-responsive" alt=""></a>
				</div>
				<div class="col-sm-4 portfolio-item">
					<a href="#inventory" class="portfolio-link game-page"
						url="inventory" data-toggle="modal">
						<div class="caption">
							<div class="caption-content">
								<i class="fa fa-search-plus fa-3x"></i>
							</div>
						</div>
						<img :src="require('../images/portfolio/circus.png')"
					class="img-responsive" alt=""></a>
				</div>
				<div class="col-sm-4 portfolio-item">
					<a href="#portfolioModal4" class="portfolio-link"
						data-toggle="modal">
						<div class="caption">
							<div class="caption-content">
								<i class="fa fa-search-plus fa-3x"></i>
							</div>
						</div>
						<img :src="require('../images/portfolio/game.png')"
					class="img-responsive" alt=""></a>
				</div>
				<div class="col-sm-4 portfolio-item">
					<a href="#portfolioModal5" class="portfolio-link"
						data-toggle="modal">
						<div class="caption">
							<div class="caption-content">
								<i class="fa fa-search-plus fa-3x"></i>
							</div>
						</div>
						<img :src="require('../images/portfolio/safe.png')"
					class="img-responsive" alt=""></a>
				</div>
				<div class="col-sm-4 portfolio-item">
					<a href="#portfolioModal6" class="portfolio-link"
						data-toggle="modal">
						<div class="caption">
							<div class="caption-content">
								<i class="fa fa-search-plus fa-3x"></i>
							</div>
						</div>
					<img :src="require('../images/portfolio/submarine.png')" class="img-responsive" alt=""></a>
				</div>
			</div>
		</div>
	</section>
	<footer class="text-center">
		<div class="footer-below">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">Copyright &copy; 2014.Company name All rights reserved.</div>
				</div>
			</div>
		</div>
	</footer>
</div>
</template>
<script>
	module.exports = {
		data:function(){
			return {
				completeLife:false
				}
		},
		created:function(){
			console.log('created...');
		},
		mounted:function(){
			console.log('mounted...');
		}
	}
</script>
<style>
</style>