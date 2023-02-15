import { omit } from 'lodash-es';
export default (r, props, ...omitPropsName) => {
    return r.useMemo(() => omit(props, ...omitPropsName), [props]);
};
