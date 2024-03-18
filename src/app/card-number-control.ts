import { FormControl } from '@angular/forms';

export class CardNumberControl extends FormControl {
  public override setValue(value: string | null, options: any) {
    if (!value) {
      super.setValue('', { ...options, emitModelToViewChange: true });
      return;
    }
    value = value.replace(/-/g, '');

    const formattedValue = value
      .replace(/\D/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();

    super.setValue(formattedValue, { ...options, emitModelToViewChange: true });
  }
}
