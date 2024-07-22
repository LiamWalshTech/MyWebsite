import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import advancedFormat from "dayjs/plugin/advancedFormat"


dayjs.extend(utc);
dayjs.extend(advancedFormat);

const formattedPublishDate = (publishDate: Date) => dayjs(publishDate).format("MMMM Do, YYYY");

export { formattedPublishDate }
