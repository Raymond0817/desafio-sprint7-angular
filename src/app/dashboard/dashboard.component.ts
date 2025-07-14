import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../models/veiculo.model';
import { VehicleData } from '../models/vehicleData.model';
import { DashboardService } from '../service/dashboard.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  veiculos: Veiculo[] = []
  veiculoSelecionado!:Veiculo
  dadosVeiculos!: VehicleData
  
  selecionaCarroForms= new FormGroup({
    carId: new FormControl(''),
  })

  constructor(private veiculoService: DashboardService){}
  ngOnInit(): void {
    this.veiculoService.getVehicles().subscribe((res)=>{
      console.log(res.vehicles);
      this.veiculos = res.vehicles;
    })
    this.selecionaCarroForms.controls.carId.valueChanges.subscribe((id)=>{
      this.veiculoSelecionado = this.veiculos[Number(id) - 1]
    })
  }

}
