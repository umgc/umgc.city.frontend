import { Component, OnInit, Renderer2, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, ViewChild, OnDestroy } from "@angular/core";
import { MatDialogRef, MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MapKeyDialogComponent } from "./map-key-dialog/map-key-dialog.component";
import { MapZoneDialogComponent } from "./map-zone-dialog/map-zone-dialog.component";
import { PasadenaZone } from "../../models/pasadenaZone";
import { MapShape } from "../../models/map-shape";
import * as mapData from "./map-data.json";
import { MapService } from 'src/app/services/map.service';
import { QuickReferenceComponent } from './quick-reference/quick-reference.component';
import { PanZoomConfig, PanZoomAPI, PanZoomModel } from 'ng2-panzoom';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-pasadena",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./pasadena.component.html",
  styleUrls: ["./pasadena.component.css"],
})
export class PasadenaComponent {
  mapKeyDialogRef: MatDialogRef<MapKeyDialogComponent>;
  mapZoneDialogRef: MatDialogRef<MapZoneDialogComponent>;
  mapReferenceDialogRef: MatDialogRef<QuickReferenceComponent>;
  zoneShapes: any = (mapData as any).default;
  zoneShape: MapShape;
  pasadenaZone: PasadenaZone;
  public panzoomConfig: PanZoomConfig = new PanZoomConfig({
    zoomLevels: 10,
    scalePerZoomLevel: 2.0,
    zoomStepDuration: 0.2,
    freeMouseWheelFactor: 0.01,
    zoomToFitZoomLevelFactor: 0.9,
    dragMouseButton: 'left'
  });
  private panZoomAPI: PanZoomAPI;
  private apiSubscription: Subscription;
  public panzoomModel: PanZoomModel;
  private modelChangedSubscription: Subscription;
  public canvasWidth = 2400;
  public initialZoomHeight: number = null; // set in resetZoomToFit()
  public initialZoomWidth = this.canvasWidth;
  public initialised = false;
  public scale = this.getCssScale(this.panzoomConfig.initialZoomLevel);
  private isMobile = false;

  
  constructor(private dialog: MatDialog, private mapService: MapService,
    private el: ElementRef,
               private renderer: Renderer2,
               private changeDetector: ChangeDetectorRef) {
    console.log(this.zoneShapes);
  }

  @ViewChild('gridElement', { static: true }) private gridElement: ElementRef;

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'background-color', 'white');
    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'overflow', 'hidden');
    this.apiSubscription = this.panzoomConfig.api.subscribe( (api: PanZoomAPI) => this.panZoomAPI = api );
    this.modelChangedSubscription = this.panzoomConfig.modelChanged.subscribe( (model: PanZoomModel) => this.onModelChanged(model) );
  }


  openMapKeyDialog() {
    this.dialog.open(MapKeyDialogComponent, {
      hasBackdrop: true,
      maxWidth: "30%",
    });
  }

  openZoningDialog(zone: any) {
    this.zoneShape = new MapShape(zone.codeLabel, zone.zoneCode, zone.overlayCode);
    let response = this.mapService.getZoneData(this.zoneShape)
    response.subscribe((data: PasadenaZone) => {
      this.pasadenaZone = data;
      this.dialog.open(MapZoneDialogComponent, { data: this.pasadenaZone});
      console.log(data);
    });      
      }

      openReferenceDialog(){
        this.dialog.open(QuickReferenceComponent, {
          hasBackdrop: true,
          maxWidth: "80%",
        });

      }

      ngAfterViewInit(): void {
        this.resetZoomToFit();
        this.changeDetector.detectChanges();
      }
    
    
    
      ngOnDestroy(): void {
        this.modelChangedSubscription.unsubscribe();
        this.apiSubscription.unsubscribe();
      }
    
    
    
    
      onModelChanged(model: PanZoomModel): void {
        this.panzoomModel = JSON.parse(JSON.stringify(model));
        this.scale = this.getCssScale(this.panzoomModel.zoomLevel);
        this.changeDetector.markForCheck();
        this.changeDetector.detectChanges();
      }
    
    
    
      private getCssScale(zoomLevel: any): number {
        // log.debug('PanZoomComponent: getCssScale()');
        return Math.pow(this.panzoomConfig.scalePerZoomLevel, zoomLevel - this.panzoomConfig.neutralZoomLevel);
      }
    
    
    
      resetZoomToFit(): void {
        let height = this.gridElement.nativeElement.clientHeight;
        let width = this.gridElement.nativeElement.clientWidth;
        height = this.canvasWidth * height / width;
        this.panzoomConfig.initialZoomToFit = { x: 0, y: 0, width: this.canvasWidth, height: height };
        this.initialZoomHeight = height;
      }
    
    
    
      public zoomIn(): void {
        this.panZoomAPI.zoomIn();
      }
    
    
    
      public zoomOut(): void {
        this.panZoomAPI.zoomOut();
      }
    
    
    
      public resetView(): void {
        this.panZoomAPI.resetView();
      }
    
    
    
      public panLeft100(): void {
        this.panZoomAPI.panDelta( { x: -100, y: 0 } );
      }
    
    
    
      public panRight100(): void {
        this.panZoomAPI.panDelta( { x: 100, y: 0 } );
      }
    
    
    
      public panUp100(): void {
        this.panZoomAPI.panDelta( { x: 0, y: -100 } );
      }
    
    
    
      public panDown100(): void {
        this.panZoomAPI.panDelta( { x: 0, y: 100 } );
      }
    
    
    
      public panLeftPercent(): void {
        this.panZoomAPI.panDeltaPercent( { x: -20, y: 0 } );
      }
    
    
    
      public panRightPercent(): void {
        this.panZoomAPI.panDeltaPercent( { x: 20, y: 0 } );
      }
    
    
    
      public panUpPercent(): void {
        this.panZoomAPI.panDeltaPercent( { x: 0, y: -20 } );
      }
    
    
    
      public panDownPercent(): void {
        this.panZoomAPI.panDeltaPercent( { x: 0, y: 20 } );
      }

    
}
