import { animate, style, transition, trigger } from '@angular/animations'
import { Component, inject, OnInit, signal } from '@angular/core'
import { SplashService } from '@shared/services/splash.service'

@Component({
    selector: 'splash',
    standalone: true,
    imports: [],
    templateUrl: './splash.component.html',
    styleUrl: './splash.component.scss',
    animations: [
        trigger('splashAnimation', [
            transition(':enter', [style({ opacity: 0 }), animate('2s ease-in', style({ opacity: 1 }))]),
            transition(':leave', [animate('2s ease-out', style({ opacity: 0 }))]),
        ]),
    ],
})
export class SplashComponent implements OnInit {
    protected displayImage = signal('')
    protected splashService = inject(SplashService)
    private images = [
        { src: 'assets/svg/isotipo-splash.svg', duration: 1000 },
        { src: 'assets/svg/imagotipo-splash.svg', duration: 2000 },
        { src: 'assets/svg/imagotipo.svg', duration: 3000 },
    ]

    ngOnInit() {
        this.showImages()
    }

    showImages() {
        this.images.forEach((image, index) => {
            setTimeout(() => {
                this.displayImage.set(image.src)
                if (index === this.images.length - 1) {
                    setTimeout(() => {
                        this.splashService.setSplash()
                    }, 1000)
                }
            }, image.duration)
        })
    }
}
