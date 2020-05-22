import pdfMaker from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
pdfMaker.vfs = pdfFonts.pdfMake.vfs

export function generatePDF(req, res) {
    const docDefinition = defineDocument()

    const pdfGenerator = pdfMake.createPdf(docDefinition)
    pdfGenerator.getBase64((data) => {

        res.writeHead(200,
            {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment;filename="filename.pdf"'
            });

        const download = Buffer.from(data.toString('utf-8'), 'base64');
        res.end(download);
    })
}

function defineDocument() {
    const docDefinition = {
        header: 'Relatorio de Cadatros',
        content: [
            { text: 'Usuários', style: 'header' },
            {
                layout: 'lightHorizontalLines',
                table: {
                    headerRows: 1,
                    body: contentBody()
                }
            }
        ]
    }

    return docDefinition
}

function contentBody() {
    const data = [
        { nome: 'Julia', idade: '10', cidade: 'Orobó', UF: 'PE' },
        { nome: 'Marcos', idade: "20", cidade: 'Caruaru', UF: 'PE' },
        { nome: 'Andre', idade: "18", cidade: 'Surubim', UF: 'PE' },
    ];

    let body = [];

    body.push(['Nome', 'Idade', 'Cidade', 'UF']);

    data.forEach(element => {
        body.push([
            element.nome,
            element.idade,
            element.cidade,
            element.UF
        ])
    });

    return body;
}
