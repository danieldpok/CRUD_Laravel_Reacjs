<!-- Sidenav -->
<nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
    <div class="container-fluid">
        <!-- Toggler -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Brand -->
        <div class="py-4 px-3 mb-4 bg-light">
            <div class="media d-flex align-items-center">
                <img src="{{ asset('img/logo_moss.png')}}" class="mr-3 rounded-circle img-thumbnail shadow-sm" alt="...">
                <div class="media-body">
                    <h4 class="m-0">App</h4>
                    <p class="font-weight-light text-muted mb-0">Mos Services</p>aa
                </div>
            </div>
        </div>
        <!-- User -->
        <ul class="nav align-items-center d-md-none">
            <!-- Notificaciones movil -->
            <!--li class="nav-item dropdown">
              <a class="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ni ni-bell-55"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li-->
            <!-- //Notificaciones movil -->
            <!-- Login movil -->
            <li class="nav-item dropdown">
                <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div class="media align-items-center">
              <span class="avatar avatar-sm rounded-circle">
                <img alt="Image placeholder" src="{{ asset('img/team-4-800x800.jpg')}}">
              </span>
                    </div>
                </a>
                <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                    <div class=" dropdown-header noti-title">
                        <h6 class="text-overflow m-0">Bienvenido!</h6>
                    </div>
                    <a href="/" class="dropdown-item">
                        <i class="ni ni-single-02"></i>
                        <span>Perfil</span>
                    </a>
                    <a href="/" class="dropdown-item">
                        <i class="ni ni-settings-gear-65"></i>
                        <span>Opciones</span>
                    </a>
                    <a href="/l" class="dropdown-item">
                        <i class="ni ni-calendar-grid-58"></i>
                        <span>Horario</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="/" class="dropdown-item">
                        <i class="ni ni-user-run"></i>
                        <span>Salir</span>
                    </a>
                </div>
            </li>
            <!-- //Login movil -->
        </ul>
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
            <!-- Collapse header -->

            <div class="navbar-collapse-header d-md-none">
                <div class="row">
                    <div class="col-6 collapse-brand">
                        <a href="/">
                            <img src="{{ asset('img/logo_moss.png')}}">bb
                        </a>
                    </div>
                    <div class="col-6 collapse-close">
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Navigation -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#" data-toggle="collapse" data-target="#navbarToggleExternalContent3">
                        <i class="ni ni-ui-04 text-primary"></i> Traspaso
                    </a>
                    <div class="collapse" id="navbarToggleExternalContent3">
                        <ul class="list-unstyled">
                            <li class="nav-item">
                                <a class="nav-link" href="/envioTraspaso">
                                    <i class="ni ni-box-2 text-yellow"></i> Envio de Traspaso
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/recibeTraspaso">
                                    <i class="ni ni-box-2 text-info"></i> Recibe Traspaso
                                </a>
                            </li>
                        </ul>
                        <hr class="my-3">
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="ni ni-badge text-blue"></i> Consultas
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/tratamientos">
                        <i class="ni ni-box-2 text-orange"></i> Tratamientos
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="ni ni-archive-2 text-yellow"></i> Historial Clinico
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-toggle="collapse" data-target="#navbarToggleExternalContent2">
                        <i class="ni ni-books text-black"></i> Inventario
                    </a>
                    <div class="collapse" id="navbarToggleExternalContent2">
                        <ul class="list-unstyled">
                            <li class="nav-item">
                                <a class="nav-link" href="/inventarioEntrada">
                                    <i class="ni ni-box-2 text-blue"></i> Entrada de Inventario
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/inventarioSalida">
                                    <i class="ni ni-building text-orange"></i> Salida de Inventario
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/inventarioEntrega">
                                    <i class="ni ni-box-2 text-blue"></i> Entrega de Inventario
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/inventarioDevolucion">
                                    <i class="ni ni-box-2 text-blue"></i> Devolucion de Inventario
                                </a>
                            </li>
                        </ul>
                        <hr class="my-3">
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="ni ni-credit-card text-red"></i> Ordenes de pago
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="ni ni-chart-bar-32 text-pink"></i> Reportes
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-toggle="collapse" data-target="#navbarToggleExternalContent">
                        <i class="ni ni-archive-2 text-info"></i> Catalogos
                    </a>
                    <div class="collapse" id="navbarToggleExternalContent">
                        <ul class="list-unstyled">
                            <li class="nav-item">
                                <a class="nav-link" href="/empleados">
                                    <i class="ni ni-single-02 text-blue"></i> Empleados
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/sucursales">
                                    <i class="ni ni-building text-orange"></i> Sucursales
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/pacientes">
                                    <i class="ni ni-circle-08 text-yellow"></i> Pacientes
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/productos">
                                    <i class="ni ni-box-2 text-info"></i> Productos
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <!-- Divider -->
            <hr class="my-3">
            <!-- Navigation -->
            <ul class="navbar-nav mb-md-3">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="ni ni-settings-gear-65"></i> Configuracion
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
