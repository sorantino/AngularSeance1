import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-composant-selecteur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './composant-selecteur.component.html',
  styleUrl: './composant-selecteur.component.css'
})
export class ComposantSelecteurComponent implements OnInit {
  constructor(public router: Router) { }

  ngOnInit(): void {

  }
}
