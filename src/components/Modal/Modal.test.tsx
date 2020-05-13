import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { UiProvider } from '../UiProvider/UiProvider';
import { Modal } from './Modal';

describe('Modal', () => {
  beforeEach(() => {
    (global as any).scroll = jest.fn();
  });

  test('should render modal', () => {
    const { getByRole } = render(
      <UiProvider>
        <Modal heading="Test Modal" isOpen={true} />
      </UiProvider>,
    );

    const modal = getByRole('dialog');
    expect(modal).toBeTruthy();
  });

  test('should call onCloseButtonClicked when clicking close button', () => {
    const onCloseButtonClicked = jest.fn();

    const { getByLabelText } = render(
      <UiProvider>
        <Modal heading="Test Modal" isOpen={true} onCloseButtonClicked={onCloseButtonClicked} />
      </UiProvider>,
    );

    const close = getByLabelText('close');
    expect(close).toBeTruthy();

    fireEvent.click(close);
    expect(onCloseButtonClicked).toHaveBeenCalledTimes(1);
  });

  test('should call onCancelButtonClicked when clicking cancel button', () => {
    const onCancelButtonClicked = jest.fn();

    const { getByText } = render(
      <UiProvider>
        <Modal heading="Test Modal" isOpen={true} onCancelButtonClicked={onCancelButtonClicked} />
      </UiProvider>,
    );

    const cancel = getByText('Cancel');
    expect(cancel).toBeTruthy();

    fireEvent.click(cancel);
    expect(onCancelButtonClicked).toHaveBeenCalledTimes(1);
  });

  test('should call onOkButtonClicked when clicking ok button', () => {
    const onOkButtonClicked = jest.fn();

    const { getByText } = render(
      <UiProvider>
        <Modal heading="Test Modal" isOpen={true} onOkButtonClicked={onOkButtonClicked} />
      </UiProvider>,
    );

    const ok = getByText('Ok');
    expect(ok).toBeTruthy();

    fireEvent.click(ok);
    expect(onOkButtonClicked).toHaveBeenCalledTimes(1);
  });

  test('should render with header only - no buttons by default', () => {
    const { queryByText } = render(
      <UiProvider>
        <Modal heading="Test Modal" isOpen={true} />
      </UiProvider>,
    );
    expect(queryByText('Test Modal')).toBeTruthy();
    expect(queryByText('Ok')).toBeFalsy();
    expect(queryByText('Cancel')).toBeFalsy();
  });

  test('should prevent onClick propagation when ok button clicked', () => {
    const containerOnClick = jest.fn();
    const okButtonClicked = jest.fn();
    const { getByText } = render(
      <UiProvider>
        <button onClick={containerOnClick}>
          <Modal heading="Test Modal" isOpen={true} onOkButtonClicked={okButtonClicked} />
        </button>
      </UiProvider>,
    );
    fireEvent.click(getByText('Ok'));
    expect(getByText('Ok')).toBeTruthy();
    expect(containerOnClick).toHaveBeenCalledTimes(0);
    expect(okButtonClicked).toHaveBeenCalledTimes(1);
  });

  test('should render custom component when customFooter is set', () => {
    const { queryByText } = render(
      <UiProvider>
        <Modal heading="Test Modal" isOpen={true} customFooter={<p>Custom component</p>} />
      </UiProvider>,
    );
    expect(queryByText('Custom component')).toBeTruthy();
  });
  test('should render custom component when customHeader is set', () => {
    const { queryByText } = render(
      <UiProvider>
        <Modal heading="Test Modal" isOpen={true} customHeader={<p>Custom component</p>} />
      </UiProvider>,
    );
    expect(queryByText('Custom component')).toBeTruthy();
  });
});
