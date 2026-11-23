import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { Step3PersonTableInput } from '../step3-person-table-input/step3-person-table-input';

@Component({
  imports: [Step3PersonTableInput],
  selector: 'app-step4-for-directive',
  styleUrl: './step4-for-directive.css',
  templateUrl: './step4-for-directive.html',
})
export class Step4ForDirective {
  persons: Person[] = [
    { "firstname": "Melicent", "lastname": "Infantino", "email": "minfantino0@discuz.net" },
    { "firstname": "Cherice", "lastname": "McMenamin", "email": "cmcmenamin1@disqus.com" },
    { "firstname": "Guillema", "lastname": "Caudelier", "email": "gcaudelier2@acquirethisname.com" },
    { "firstname": "Griff", "lastname": "Liddiatt", "email": "gliddiatt3@guardian.co.uk" },
    { "firstname": "Lezley", "lastname": "Brighouse", "email": "lbrighouse4@cloudflare.com" },
    { "firstname": "Dedie", "lastname": "Scudamore", "email": "dscudamore5@infoseek.co.jp" },
    { "firstname": "Teddi", "lastname": "Fewlass", "email": "tfewlass6@moonfruit.com" },
    { "firstname": "Carlene", "lastname": "Perfect", "email": "cperfect7@macromedia.com" },
    { "firstname": "Waldon", "lastname": "Mansuer", "email": "wmansuer8@multiply.com" },
    { "firstname": "Sterne", "lastname": "Haye", "email": "shaye9@prlog.org" },
    { "firstname": "Jacquelin", "lastname": "Beccera", "email": "jbecceraa@ebay.co.uk" },
    { "firstname": "Corrianne", "lastname": "Vaughton", "email": "cvaughtonb@blog.com" },
    { "firstname": "Marijn", "lastname": "Fiddeman", "email": "mfiddemanc@ihg.com" },
    { "firstname": "Ashli", "lastname": "Burroughes", "email": "aburroughesd@oaic.gov.au" },
    { "firstname": "Lezlie", "lastname": "Medcalfe", "email": "lmedcalfee@blogger.com" },
    { "firstname": "Leyla", "lastname": "Leidecker", "email": "lleideckerf@booking.com" },
    { "firstname": "Camile", "lastname": "Westcarr", "email": "cwestcarrg@bloglovin.com" },
    { "firstname": "Brook", "lastname": "Orrah", "email": "borrahh@reverbnation.com" },
    { "firstname": "Larisa", "lastname": "Dulin", "email": "ldulini@studiopress.com" },
    { "firstname": "Ekaterina", "lastname": "Bartkowiak", "email": "ebartkowiakj@slate.com" }
  ]
}
