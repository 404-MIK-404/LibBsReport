import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class LibBsReportService {
    constructor() { }
}
LibBsReportService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: LibBsReportService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LibBsReportService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: LibBsReportService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: LibBsReportService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class LibBsReportComponent {
}
LibBsReportComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: LibBsReportComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LibBsReportComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: LibBsReportComponent, selector: "lib-lib-bs-report", ngImport: i0, template: `
    <p>
      lib-bs-report works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: LibBsReportComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-lib-bs-report', template: `
    <p>
      lib-bs-report works!
    </p>
  ` }]
        }] });

class LibBsReportModule {
}
LibBsReportModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: LibBsReportModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LibBsReportModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: LibBsReportModule, declarations: [LibBsReportComponent], exports: [LibBsReportComponent] });
LibBsReportModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: LibBsReportModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: LibBsReportModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LibBsReportComponent
                    ],
                    imports: [],
                    exports: [
                        LibBsReportComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of lib-bs-report
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LibBsReportComponent, LibBsReportModule, LibBsReportService };
//# sourceMappingURL=lib-bs-report.mjs.map
