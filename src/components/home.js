import React from 'react';

function Home() {
    return (

        <body>

            <header class="jumbotron jumbotron-fluid">
                <div class="container">
                    <div class="row">
                        <div class="col text-center">
                            <h1>tender tarot</h1>

                            <nav class="navbar navbar-expand-md navbar-dark ">

                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav mr-auto">
                                        <li class="nav-item active">
                                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="about.html">About</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="services.html">Services</a>
                                        </li>
                                        <li class="nav-item active">
                                            <a class="nav-link" href="testimonials.html">Testimonials <span class="sr-only"></span></a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Tarot Spreads
                                    </a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item" href="tarot.html">Create your own spread!</a>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <div class="row row-content align-items-center" id="whatIDo">
                <div class="col-md-5 col-lg-4 col-xl-3">
                    <div class=" ml-3 media-body align-self-center">
                        <img id="magic" class=" d-flex img-thumbnail" src="images/magicinus.jfif" style="width: 300px; height: 200px;" alt="magic" />
                    </div>
                </div>
                <div class="col-md-7 col-lg-8 col-xl-3">
                    <div class="media">
                        <div class=" media-body align-self-center">
                            <h3>What I Do</h3>
                            <p>It is my hope to help guide others as others have guided me through tarot, pendulum work, and energy work. I cannot give you predictions of the future, but I can help you connect you to your own feelings about it in order to guide you in ways that feel right and "truthy" to you..</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-7 col-lg-8 col-xl-3">
                    <div class="media">
                        <div class="media-body align-self-center">
                            <h3>About Me</h3>
                            <p>I have been working with tarot since 2013. Building on my ability to reflect and self-reflect, I have come to bring my skills of divination to you. With these skills, I hope to help connect you to yourself and the wisdom you already possess. It is my hope to guide others with their own paths to self kindness, love, and knowledge. Together we can journey into your past, current, and future issues in order to identify that which you seek. </p>
                        </div>
                    </div>
                </div>
                <br></br>
                <div class="col-md-5 col-lg-4 col-xl-3">
                    <div class=" ml-3 media-body align-self-center">
                        <img id="crystal" class=" d-flex img-thumbnail" src="images/crystal.jfif" style="width: 300px; height: 200px;" alt="crystal" />
                    </div>
                </div>
            </div>



            <!-- jQuery must come first, then Popper.js, then the Bootstrap JavaScript plugins.-->
            <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
            <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
            <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>


        </body>

    )
}