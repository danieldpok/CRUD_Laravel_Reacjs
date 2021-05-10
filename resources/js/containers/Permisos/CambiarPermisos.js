import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function CambiarPermisos() {
  return (
    <div className="CambiarPermisos">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title" id="from-actions-top-left">
                Cambiar Permiso
            </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="card-content collpase show">
        <div className="card-body">
          <div className="card-text"></div>
          <form className="form">
            <div className="form-actions text-right">
              <Link
                to="/"
                type="button"
                className="btn btn-warning mr-1"
              >
                <i className="ft-x"></i>Cancelar
            </Link>
              <Link
                to="/permisos"
                type="button"
                className="btn btn-primary mr-1"
              >
                <i className="la la-check-square-o"></i>Guardar
            </Link>
            </div>
            <div className="form-body">
              <h4 className="form-section">
                <FontAwesomeIcon icon="user" /> Permisos
            </h4>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Asignacion de Actividades</label>
                </div>
                <div className="form-group col-md-6 mb-2 text-center">
                  <div className="form-control">
                    Nueva Asignacion<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                  <div className="form-control">
                    Eliminar Asignacion<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                  <div className="form-control">
                    Editar Asignacion<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Bandeja de Actividades</label>
                </div>
                <div className="form-group col-md-6 mb-2 text-center">
                  <div className="form-control">
                    Alta<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                  <div className="form-control">
                    Eliminar<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                  <div className="form-control">
                    Editar<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Bandeja de Revision</label>
                </div>
                <div className="form-group col-md-6 mb-2 text-center">
                  <div className="form-control">
                    Alta<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                  <div className="form-control">
                    Eliminar<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                  <div className="form-control">
                    Editar<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Bandeja de Pagos</label>
                </div>
                <div className="form-group col-md-6 mb-2 text-center">
                  <div className="form-control">
                    Alta<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                  <div className="form-control">
                    Eliminar<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                  <div className="form-control">
                    Editar<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Usuarios</label>
                </div>
                <div className="form-group col-md-6 mb-2 text-center">
                  <div className="form-control">
                    Alta<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                  <div className="form-control">
                    Eliminar<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                  <div className="form-control">
                    Editar<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Roles</label>
                </div>
                <div className="form-group col-md-6 mb-2 text-center">
                  <div className="form-control">
                    Alta<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                  <div className="form-control">
                    Eliminar<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                  <div className="form-control">
                    Editar<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Proyectos</label>
                </div>
                <div className="form-group col-md-6 mb-2 text-center">
                  <div className="form-control">
                    Alta<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                  <div className="form-control">
                    Eliminar<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                  <div className="form-control">
                    Editar<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Servicios</label>
                </div>
                <div className="form-group col-md-6 mb-2 text-center">
                  <div className="form-control">
                    Alta<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                  <div className="form-control">
                    Eliminar<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                  <div className="form-control">
                    Editar<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Tipo de Anexos</label>
                </div>
                <div className="form-group col-md-6 mb-2 text-center">
                  <div className="form-control">
                    Alta<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                  <div className="form-control">
                    Eliminar<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                  <div className="form-control">
                    Editar<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Permisos</label>
                </div>
                <div className="form-group col-md-6 mb-2 text-center">
                  <div className="form-control">
                    Alta<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                  <div className="form-control">
                    Eliminar<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                  <div className="form-control">
                    Editar<input type="checkbox" className="ml-2 mr-2" name="isr" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
