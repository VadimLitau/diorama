import * as ghPages from "gh-pages";

export const deploy = (cb) => {
   ghPages.publish(app.path.build.root, cb);
};
