import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi'

import { Container, P } from './styles';

interface Props{
    onFileUploaded:  (file: File) => void;
}

const Dropzone: React.FC<Props> = ({onFileUploaded}) => {
    const [selectedFileUrl, setselectedFileUrl] = useState('');

    const onDrop = useCallback(acceptedFiles => {
        // Como so terá um arquivo, a imagem sempre estará na pos 0
        const file = acceptedFiles[0];

        const fileUrl = URL.createObjectURL(file);
        setselectedFileUrl(fileUrl);
        onFileUploaded(file);
    }, [onFileUploaded])

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*' // Somente aceita imagens
    });

    return (
        <Container {...getRootProps()} >
            <input {...getInputProps()} accept="image/*" />

            {selectedFileUrl
                ? <img src={selectedFileUrl} alt="Point thumbmail" />
                : (
                    <P>
                        <FiUpload />
                        Imagem do estabelecimento
                    </P>
                )
            }

        </Container>
    )

}

export default Dropzone;