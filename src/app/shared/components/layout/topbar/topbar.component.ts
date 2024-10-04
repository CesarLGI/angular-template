import { Component } from '@angular/core'

@Component({
    selector: 'layout-topbar',
    standalone: true,
    imports: [],
    templateUrl: './topbar.component.html',
    styleUrl: './topbar.component.scss',
    host: { '[class.Topbar]': 'true' },
})
export class TopbarComponent {}
