import dayjs from 'dayjs';
// stateの中身を、1秒おきに最新のdayjsに更新
export default (r) => {
    const [nowDayjs, setNowDayjs] = r.useState(dayjs());
    const interval = r.useRef();
    r.useEffect(() => {
        interval.current = setInterval(() => setNowDayjs(dayjs()), 1000);
    }, []);
    return [nowDayjs, interval];
};
