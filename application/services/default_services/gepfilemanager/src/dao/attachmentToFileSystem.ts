import * as fs from "fs";
import { CustomLogger } from "../config/Logger";
import * as path from "path";
export class AttachmentToFileSystem {
    private callConstructor:string;
    constructor() { 
        this.callConstructor = "callConstructor";
    }
    
    public  fileSaveToSystem(file, fileName) {
        let image_folder_location = "public/"
        let image_access_location = "static/"
        return new Promise((resolve, reject) => {
            new CustomLogger().showLogger("info", "Enter into attachmentToFileSystem.ts: fileSaveToSystem");
            console.log("File Save----------------->", 'public/'+fileName, typeof fileName);
            let saveTo =  path.join(image_folder_location + fileName);
            file.pipe(fs.createWriteStream(saveTo));
                resolve(image_access_location + fileName);
            new CustomLogger().showLogger('info', 'Exit from attachmentToFileSystem.ts: fileSaveToSystem');
        });

    }

    public async deleteAttachment(fileKey,callback) {
        new CustomLogger().showLogger("info", "Enter into attachmentToFileSystem.ts: deleteAttachment");
        fs.unlink(fileKey, function (err) {
            if (err)
            {
                callback(err);
            } 
            // if no error, file has been deleted successfully
            console.log('File deleted!');
        });
        new CustomLogger().showLogger('info', 'Exit from attachmentToFileSystem.ts: deleteAttachment');
    }

    public fileDownload(fileKey,res, callback) {
        new CustomLogger().showLogger("info", "Enter into attachmentToS3Dao.ts: fileDownloadFromS3");
        res.download(fileKey); // Set disposition and send it.

        new CustomLogger().showLogger("info", "Exit into attachmentToS3Dao.ts: fileDownloadFromS3");
    }


}
