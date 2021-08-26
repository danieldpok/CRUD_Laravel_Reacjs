<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateUsuarioRequest;
use Illuminate\Http\Request;
use App\Models\ServicetagProyectos;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Validator,Redirect,Response,File;
use App\Document;
use Illuminate\Http\UploadedFile;

class ServiceTag extends Controller
{

    public function importCsv(Request $request) {
        $data = array();

        $file = $request->file("csv_file");
        $csvData = file_get_contents($file);


        $rows = array_map("str_getcsv", explode("\n", $csvData));
        $header = array_shift($rows);

        foreach ($rows as $row) {
            if (isset($row[0])) {
                if ($row[0] != "") {
                    $row = array_combine($header, $row);

                    $leadData = array(
                        "servicetag" => $row["servicetag"],
                        "tipo" => $row["tipo"],
                        "modelo_equipo" => $row["modelo_equipo"],
                        "marca" => $row["marca"],
                        "modelo_monitor" => $row["modelo_monitor"],
                        "id_proyecto" => $row["id_proyecto"]
                    );

                    $checkLead  = ServicetagProyectos::where("servicetag", "=", $row["servicetag"])->first();

                    if (!is_null($checkLead)) {
                        $updateLead   =       ServicetagProyectos::where("servicetag", "=", $row["servicetag"])->update($leadData);
                        if($updateLead == true) {
                            $data["status"]     =       "failed";
                            $data["message"]    =       "Updated successfully";
                        }
                    }

                    else {
                        $lead = ServicetagProyectos::create($leadData);
                        if(!is_null($lead)) {
                            $data["status"]     =       "success";
                            $data["message"]    =       "Imported successfully";
                        }
                    }
                }
            }
        }

        return back()->with($data["status"], $data["message"]);
    }

}
