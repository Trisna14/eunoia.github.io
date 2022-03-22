
<?php 

    function uploadFile () {
        if (isset($_FILES['upload']['tmp_name'])) {
            $file = $_FILES['upload']['tmp_name'];
            $fileName = $_FILES['upload']['name'];
            $fileNameArray = explode('.', $fileName);
            $extension = end($fileNameArray);
            $newName = rand() . '.' . $extension;
            $allow = ['jpg','jpeg','png','JPG','JPEG'];
    
            if (in_array($extension, $allow)) {
                move_uploaded_file($file, 'poster-temporary/' . $newName);
    
                $functionNumber = $_GET['CKEditorFuncNum'];
    
                $url = 'poster-temporary/' . $newName;
    
                // $message = '';
    
                echo 
                "<script type='text/javascript'>
                    // console.log('$functionNumber,$url');
                    window.parent.CKEDITOR.tools.callFunction($functionNumber, '$url');
                    // console.log(window.parent.CKEDITOR.tools.callFunction);
                </script>";
            }
        }
    }

    uploadFile();
?>