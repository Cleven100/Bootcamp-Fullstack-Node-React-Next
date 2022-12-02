import express from "express";
import { promises as fs} from "fs";


const router = express.Router();

async function getBrands() {
    const data = await fs.readFile("car-list.json");
    return JSON.parse(data);  
}

router.get("/maisModelos",  async (require, response) => {
    const brands = await getBrands();
       let result = [];
       let max = 0;
       for( const b of brands) {
           if(b.models.length > max) {
               result = [];
               result.push(b);
               max = b.models.length;
           } else if (b.models.length === max) {
               result.push(b);
           }
       }
       if(result.length === 1) {
           response.send(result[0].brand);
       } else {
           response.send(result.map((i) => i.brand));
       }
   });


   router.get("/listaMaisModelos/:qtd", async (req, res) => {
    const brands = await getBrands();
    brands.sort((a, b) => {
        if(b.models.length === a.models.length) {
            return a.brand.localeCompare(b.brand);
        }
       return b.models.length - a.models.length;

    });
    console.log(brands.slice(0, req.params.qtd).map(b => `${b.brand} - ${b.models.length}`));
   });

export default router;