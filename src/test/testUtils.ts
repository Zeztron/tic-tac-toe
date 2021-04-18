import { ReactWrapper, ShallowWrapper } from 'enzyme';

/**
 * Return node(s) with the given data-test attribute.
 * @param wrapper - Enzyme shallow wrapper.
 * @param value - Value of data-test attribute for search.
 * @returns {ShallowWrapper | ReactWrapper}
 */
export const findByTestAttr = (
  wrapper: ShallowWrapper | ReactWrapper,
  value: string
) => wrapper.find(`[data-test="${value}"]`);
