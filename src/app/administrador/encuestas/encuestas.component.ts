import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {

  @Input()item: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  encuestas: any =[
    {id:1, titulo:'Indicadores de Existencia', factor:1, indicador: '1.1 Barreras para el aprendizaje y la participación', definicion: 'La institución de educación superior cuenta con una política de educación inclusiva que permite reconocer y minimizar las barreras para el aprendizaje y la participación', respuesta:'Existe y se implementa, Existe y no se implementa, no existe, no sabe'},
    {id:2, titulo:'Indicadores de Existencia', factor:2, indicador: '2.1 Participacion de estudiantes', definicion: 'La institución cuenta con una politica que facilita la participación de todos los estudiantes en los procesos academicos y administrativos', respuesta:'Existe y se implementa, Existe y no se implementa, no existe, no sabe'},
    {id:3, titulo:'Indicadores de Existencia', factor:2, indicador: '2.2 Admisión permannencia y sistemas de estimulos y creditos para estudiantes', definicion: 'La institución cuenta con estrategias y procesos que permiten y facilitan el acceso y la permanencia de los estudiantes y adicionamemte cuenta con los sistemas de becas, prestamos y estimulos que proporcionana el ingreso y la permanencia de estudiantes academicamente valiosos y en condicion de vulnerabilidad, para grarantizar graduacion de calidad', respuesta:'Existe y se implementa, Existe y no se implementa, no existe, no sabe'},
    {id:4, titulo:'Indicadores de Existencia', factor:3, indicador: '3.1 Participacion de docentes', definicion: 'La institución cuenta con una politica que facilita la participacion de todos los docentes en los procesos academicos y administrativos', respuesta:'Existe y se implementa, Existe y no se implementa, no existe, no sabe'},
    {id:5, titulo:'Indicadores de Existencia', factor:4, indicador: '4.2 Los procesos academicos de la institucion cuentan con herramientas de evaluacion flexible que reconocen las particiapciones, las capacidades y las potencialidades de cada estudiante', definicion: 'La institución de educación superior cuenta con una política de educación inclusiva que permite reconocer y minimizar las barreras para el aprendizaje y la participación', respuesta:'Existe y se implementa, Existe y no se implementa, no existe, no sabe'},
    {id:6, titulo:'Indicadores de Existencia', factor:7, indicador: '7.2 Seguimiento y apoyo a vinculación lavoral', definicion: 'La IES desarrolla estrategias e implementa mecanismos de acompañamientos a sus egrasados, como parte de una politica de seguimiento y apoyo a la vinculacion laboral', respuesta:'Existe y se implementa, Existe y no se implementa, no existe, no sabe'},
    {id:7, titulo:'Indicadores de Existencia', factor:8, indicador: '8.3 Sistema de informacion inclusivo', definicion: 'La institución cuenta con sistemade informacion disponible, confiable y accesible, que orienta la formulación de politicas institucionales que fomentan la educación superior.', respuesta:'Existe y se implementa, Existe y no se implementa, no existe, no sabe'},
    {id:8, titulo:'Indicadores de Existencia', factor:1, indicador: 'Barreras para el aprendizaje y la participación', definicion: 'La institución cuenta con una política de educación inclusiva que permite reconocer y minimizar las barreras para el aprendizaje y la participación', respuesta:'Existe y se implementa, Existe y no se implementa, no existe, no sabe'}
  ];

  ngOnInit(): void {
  }

}
