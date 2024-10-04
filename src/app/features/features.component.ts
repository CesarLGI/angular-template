import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { SidebarComponent } from '../shared/components/layout/sidebar/sidebar.component'
import { TopbarComponent } from '../shared/components/layout/topbar/topbar.component'

@Component({
    standalone: true,
    imports: [RouterOutlet, SidebarComponent, TopbarComponent],
    templateUrl: './features.component.html',
    styleUrl: './features.component.scss',
})
export class FeaturesComponent {}
