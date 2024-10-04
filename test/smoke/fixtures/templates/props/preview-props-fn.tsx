import { Body, Html } from 'jsx-email';

export const TemplateName = 'preview-props-fn';

export const Template = ({ test }: { test: string }) => (
  <Html>
    <Body>{test}</Body>
  </Html>
);

export const previewProps = () => {
  return { test: 'batman' };
};