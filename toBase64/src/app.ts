
// Função para converter imagem para base64
function convertImageToBase64(imageFile: any): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      // 'reader.result' contém os bytes da imagem
      const arrayBuffer = reader.result as ArrayBuffer;
      const uint8Array = new Uint8Array(arrayBuffer);

      // Converte os bytes para uma string base64 manualmente
      let base64String = '';
      uint8Array.forEach((byte) => {
        base64String += String.fromCharCode(byte);
      });

      // Codifica a string para base64
      base64String = btoa(base64String);

      resolve(base64String);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    // Lê o conteúdo do arquivo como um ArrayBuffer
    reader.readAsArrayBuffer(imageFile);
  });
}

// Exemplo de uso
const fileInput:any = document.getElementById('previewImage') ;

const data = fileInput_();
console.log(data);

async function fileInput_(){
  const files:any = fileInput;

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  canvas.width = fileInput.width;
  canvas.height = fileInput.height;

  context?.drawImage(fileInput, 0, 0, fileInput.width, fileInput.height);

  // Obtém os dados da imagem diretamente do canvas
  const imageData = context?.getImageData(0, 0, canvas.width, canvas.height);

  //const base64String = canvas.toDataURL('image/png');


 // console.log(base64String);
  /*if (imageData) {
    console.log('Dados da Imagem:', imageData);
    
    // Cria um novo canvas para desenhar os dados da imagem
    const newDataCanvas = document.createElement('canvas');
    const newDataContext = newDataCanvas.getContext('2d');
    
    newDataCanvas.width = imageData.width!;
    newDataCanvas.height = imageData.height!;
    
    // Aplica os dados da imagem ao novo canvas
    newDataContext?.putImageData(imageData, 0, 0);
    
    // Cria uma URL para o novo canvas
    const newDataUrl = newDataCanvas.toDataURL('image/png');
    
    // Cria um link para o download
    const downloadLink = document.createElement('a');
    downloadLink.href = newDataUrl;
    downloadLink.download = 'imagem.png';
    
    // Simula o clique no link para iniciar o download
    downloadLink.click();
  }*/

  
}

