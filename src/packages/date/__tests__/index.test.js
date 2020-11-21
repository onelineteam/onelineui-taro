import React from 'react';
import {render, screen} from '@testing-library/react';
import DatePicker from '../index';

test("测试界面", () => {
  render(<DatePicker></DatePicker>);

  const tests =  screen.queryAllByText('2020');
  expect(tests.length).toBe(1);
})