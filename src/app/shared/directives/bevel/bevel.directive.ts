import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * Структурная директива
 * Add the template content to the DOM unless the condition is true.
 */
@Directive({ selector: '[appUnless]' })
export class UnlessDirective {

  private hasView = false

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef)
      this.hasView = true
    } else if (condition && this.hasView) {
      this.viewContainer.clear()
      this.hasView = false
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

}
