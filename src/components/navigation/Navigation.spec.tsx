import { test, expect } from '@playwright/experimental-ct-react';
import Navigation from './navigation';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
  const component = await mount(<Navigation/>);
  await expect(component).toContainText('');
});