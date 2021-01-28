import { omit } from 'lodash-es';
import { useMemo } from 'react';
export default (props, ...omitPropsName) => {
    return useMemo(() => omit(props, ...omitPropsName), [props]);
};
