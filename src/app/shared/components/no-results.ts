import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-no-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './no-results.html',
  styleUrl: './no-results.css'
})
export class NoResultsComponent {
  @Input() message: string = 'Ningún resultado encontrado.';
}