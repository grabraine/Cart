import {
    Directive,
    HostBinding,
    HostListener } from '@angular/core';
  
  @Directive({
    selector: '[appRainbow]'
  })
  export class RainbowDirective {
    possibleColors = [
      'RED'
    ];
  
    @HostBinding('style.color') color: string;
    @HostBinding('style.backgroundColor') borderColor: string;
    
    
  
    @HostListener('mouseover') newColor() {
      const colorPick = Math.floor(Math.random() * this.possibleColors.length);
      this.color = "white";
      this.borderColor = this.possibleColors[colorPick];
    
    }
    @HostListener('mouseout') newColor1() {
        const colorPick = Math.floor(Math.random() * this.possibleColors.length);
        this.color = "";    
        this.color = this.borderColor = '';
      }
  }