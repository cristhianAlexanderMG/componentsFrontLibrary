import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EnumerablesTypesApp} from "../../../models/enumerablesTypesApp";
import {EnumerableIconsPrimeng} from "../../../models/enumerableIconsPrimeng";

@Component({
  selector: 'app-button-primeng',
  templateUrl: './button-primeng.component.html',
  styleUrls: ['./button-primeng.component.scss']
})
export class ButtonPrimengComponent implements OnInit {
  // Name of button
  @Input() label: string = 'Button';

  // Check if is disabled
  @Input() disabled: boolean = false;

  // Check if is raised
  @Input() raised: boolean = false;

  // Check if is rounded
  @Input() rounded: boolean = false;

  // Check if is outlined
  @Input() outlined: boolean = false;

  // Check if is loading
  @Input() loading: boolean = false;

  // Name of icon
  @Input() icon: string = '';

  // Position of icon
  @Input() positionIcon: string = EnumerablesTypesApp.enumPosition.Right;

  // Text of badge
  @Input() badge: string = '';

  // Type Severity Button
  @Input() typeSeverityButton: string = EnumerablesTypesApp.enumSeverity.Primary;

  // Type Severity Badge
  @Input() typeSeverityBadge: string = EnumerablesTypesApp.enumSeverity.Primary;

  // Size button
  @Input() size: string = EnumerablesTypesApp.enumSize.Small;

  // Button with options
  @Input() withMenu: boolean = false;

  // Button Circle Float
  @Input() buttonCircleFloat: boolean = false;

  // Position Button Circle Float
  @Input() positionButtonCircleFloat: string = EnumerablesTypesApp.enumPosition.Up;

  // Options by button
  @Input() optionsMenu: any = [];

  // Text of the tooltip
  @Input() labelTooltip: string = '';

  // Type of position on tooltip
  @Input() positionTooltip: string = EnumerablesTypesApp.enumPosition.Top;

  @Output() onClick = new EventEmitter<void>();

  styleClass: string = 'm-1 ';
  badgeClass: string = '';
  iconPos: string = '';

  enumIcon = EnumerableIconsPrimeng.icon;

  ngOnInit(): void {
    this.identifySeverityOfTheButton();
  }

  private identifySeverityOfTheButton(): void {
    switch (this.typeSeverityButton) {
      case EnumerablesTypesApp.enumSeverity.Primary: {
        this.styleClass = this.styleClass + '';
        break;
      }
      case EnumerablesTypesApp.enumSeverity.Secondary: {
        this.styleClass = this.styleClass + ' p-button-secondary';
        break;
      }
      case EnumerablesTypesApp.enumSeverity.Success: {
        this.styleClass = this.styleClass + ' p-button-success';
        break;
      }
      case EnumerablesTypesApp.enumSeverity.Info: {
        this.styleClass = this.styleClass + ' p-button-info';
        break;
      }
      case EnumerablesTypesApp.enumSeverity.Warning: {
        this.styleClass = this.styleClass + ' p-button-warning';
        break;
      }
      case EnumerablesTypesApp.enumSeverity.Help: {
        this.styleClass = this.styleClass + ' p-button-help';
        break;
      }
      case EnumerablesTypesApp.enumSeverity.Danger: {
        this.styleClass = this.styleClass + ' p-button-danger';
        break;
      }
    }
    this.identifyPositionOfTheIconInButton();
  }

  private identifyPositionOfTheIconInButton(): void {
    switch (this.positionIcon) {
      case EnumerablesTypesApp.enumPosition.Right: {
        this.iconPos = 'right';
        break;
      }
      case EnumerablesTypesApp.enumPosition.Left: {
        this.iconPos = 'left';
        break;
      }
      default: {
        this.iconPos = '';
        break;
      }
    }
    this.identifyRaisedOfTheButton();
  }

  private identifyRaisedOfTheButton(): void {
    if (this.raised) {
      this.styleClass = this.styleClass + ' p-button-raised';
    } else {
      this.styleClass = this.styleClass + ' ';
    }
    this.identifyRoundedOfTheButton();
  }

  private identifyRoundedOfTheButton(): void {
    if (this.rounded) {
      this.styleClass = this.styleClass + ' p-button-rounded';
    } else {
      this.styleClass = this.styleClass + ' ';
    }
    this.identifyOutlinedOfTheButton();
  }

  private identifyOutlinedOfTheButton(): void {
    if (this.outlined) {
      this.styleClass = this.styleClass + ' p-button-outlined';
    } else {
      this.styleClass = this.styleClass + ' ';
    }
    this.identifySeverityOfTheBadge();
  }

  private identifySeverityOfTheBadge(): void {
    switch (this.typeSeverityBadge) {
      case EnumerablesTypesApp.enumSeverity.Primary: {
        this.badgeClass = '';
        break;
      }
      case EnumerablesTypesApp.enumSeverity.Secondary: {
        this.badgeClass = ' p-badge-secondary';
        break;
      }
      case EnumerablesTypesApp.enumSeverity.Success: {
        this.badgeClass = ' p-badge-success';
        break;
      }
      case EnumerablesTypesApp.enumSeverity.Info: {
        this.badgeClass = ' p-badge-info';
        break;
      }
      case EnumerablesTypesApp.enumSeverity.Warning: {
        this.badgeClass = ' p-badge-warning';
        break;
      }
      case EnumerablesTypesApp.enumSeverity.Help: {
        this.badgeClass = ' p-badge-help';
        break;
      }
      case EnumerablesTypesApp.enumSeverity.Danger: {
        this.badgeClass = ' p-badge-danger';
        break;
      }
    }
    this.identifySizeOfTheButton();
  }

  private identifySizeOfTheButton(): void {
    switch (this.size) {
      case EnumerablesTypesApp.enumSize.Small: {
        this.styleClass = this.styleClass + ' p-button-sm';
        break;
      }
      case EnumerablesTypesApp.enumSize.Normal: {
        this.styleClass = this.styleClass + ' p-button';
        break;
      }
      case EnumerablesTypesApp.enumSize.Large: {
        this.styleClass = this.styleClass + ' p-button-lg';
        break;
      }
    }
  }

  returnOnClick() {
    this.onClick.emit();
  }
}
