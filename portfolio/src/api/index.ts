import clientConnectionWithSupabase from '@/lib/supabase'
import { v4 as uuidv4 } from "uuid";


export const getAllDocuments = async () => {
    const supabase = clientConnectionWithSupabase()
    let { data: DocxChats, error } = await supabase
        .from('portfolio_document')
        .select("*")
    console.log(error)
    if (error !== null) return { success: false }
    return { success: true, data: DocxChats }
}


export const addDocument = async (selectedFiles: any) => {
    const supabase = clientConnectionWithSupabase()
    let notUploaded: any[] = [];
    for (var i = 0; i < selectedFiles.length; i++) {
        const newUuid = uuidv4();
        const extension = getFileExtension(selectedFiles[i].name)
        const result: any = await supabase.storage.from('Documents').upload(`Jamal_Documents/${newUuid}.${extension}`, selectedFiles[i]);
        console.log(result)
        if (result?.error !== null) {
            notUploaded.push(i);
        } else {
            const { data, error } = await supabase
                .from('portfolio_document')
                .insert([
                    { Name: selectedFiles[i].name, id: newUuid , extension },
                ])
                .select()
            console.log(data)
            console.log(error)
            if (error !== null) {
                await supabase.storage.from('Documents').remove([`Jamal_Documents/${newUuid}.${extension}`])
                notUploaded.push(i);
            }
        }
    }
    let { data: portfolio_document, error } = await supabase
        .from('portfolio_document')
        .select('*')
    return { data: portfolio_document, notUploaded }
}


export const DeleteDocFromSupabase = async(uuid:any)=>{
    const supabase = clientConnectionWithSupabase()
    const { error } = await supabase
        .from('portfolio_document')
        .delete()
        .eq('id', uuid)
    if(error==null){
        const {error} = await supabase.storage.from('Documents').remove([`Jamal_Documents/${uuid}.pdf`])
        return {success:true}
    }else{
        return {success:false,error:"Issue in server"}
    }
}


const getFileExtension = (filename: string): string => {
    const lastDotIndex = filename.lastIndexOf(".");
    return lastDotIndex !== -1 ? filename.slice(lastDotIndex + 1) : ""; // Return an empty string if no extension
};


export const getSignedUrl= async(bucket: string, filePath: string) =>{
    const supabase = clientConnectionWithSupabase()
    const { data, error } = await supabase
        .storage
        .from(bucket)
        .createSignedUrl(filePath, 60); // Link expires in 60 seconds

    if (error) {
        console.error('Error getting signed URL:', error);
        return null;
    }
    console.log(data)
    return data.signedUrl;
}

// // Example usage
// getSignedUrl('documents', 'user123/file.pdf').then(console.log);

