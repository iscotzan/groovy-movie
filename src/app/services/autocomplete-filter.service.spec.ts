import { TestBed } from '@angular/core/testing';

import { AutocompleteFilterService } from './autocomplete-filter.service';

describe('AutocompleteFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutocompleteFilterService = TestBed.get(AutocompleteFilterService);
    expect(service).toBeTruthy();
  });
});
