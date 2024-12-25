import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {

  ELEMENT_DATA: Tecnico[] = [
    {
      id: 1,
      nome: 'Jackson Luiz',
      cpf: '247.656.480-01',
      email: 'jackson@gmail.com',
      senha: '123',
      perfis: ['0'],
      dataCriacao: '24/12/2024'
    },
    {
      id: 2,
      nome: 'Naruto Uzumaki',
      cpf: '321.654.987-02',
      email: 'naruto@hokage.com',
      senha: 'uzumaki',
      perfis: ['1'],
      dataCriacao: '24/12/2024'
    },
    {
      id: 3,
      nome: 'Sasuke Uchiha',
      cpf: '564.738.291-03',
      email: 'sasuke@uchiha.com',
      senha: 'uchiha',
      perfis: ['2'],
      dataCriacao: '24/12/2024'
    },
    {
      id: 4,
      nome: 'Goku Son',
      cpf: '978.654.123-04',
      email: 'goku@dbz.com',
      senha: 'kamehameha',
      perfis: ['0'],
      dataCriacao: '24/12/2024'
    },
    {
      id: 5,
      nome: 'Vegeta Prince',
      cpf: '432.876.540-05',
      email: 'vegeta@prince.com',
      senha: 'pride',
      perfis: ['1'],
      dataCriacao: '24/12/2024'
    },
    {
      id: 6,
      nome: 'Kurama',
      cpf: '111.222.333-06',
      email: 'kurama@bijuu.com',
      senha: 'kyuubi',
      perfis: ['2'],
      dataCriacao: '24/12/2024'
    },
    {
      id: 7,
      nome: 'Hinata Hyuga',
      cpf: '111.333.555-07',
      email: 'hinata@hyuga.com',
      senha: 'byakugan',
      perfis: ['1'],
      dataCriacao: '24/12/2024'
    },
    {
      id: 8,
      nome: 'Kakashi Hatake',
      cpf: '444.555.666-08',
      email: 'kakashi@hatake.com',
      senha: 'sharingan',
      perfis: ['2'],
      dataCriacao: '24/12/2024'
    },
    {
      id: 9,
      nome: 'Sakura Haruno',
      cpf: '555.666.777-09',
      email: 'sakura@haruno.com',
      senha: 'tsunade',
      perfis: ['0'],
      dataCriacao: '24/12/2024'
    },
    {
      id: 10,
      nome: 'Tsunade Senju',
      cpf: '777.888.999-10',
      email: 'tsunade@senju.com',
      senha: 'slug',
      perfis: ['1'],
      dataCriacao: '24/12/2024'
    },
    {
      id: 11,
      nome: 'Frieza',
      cpf: '345.678.912-11',
      email: 'frieza@dbz.com',
      senha: 'emperor',
      perfis: ['2'],
      dataCriacao: '24/12/2024'
    },
    {
      id: 12,
      nome: 'Piccolo',
      cpf: '111.777.333-12',
      email: 'piccolo@dbz.com',
      senha: 'majin',
      perfis: ['1'],
      dataCriacao: '24/12/2024'
    },
    {
      id: 13,
      nome: 'Trunks',
      cpf: '876.543.210-13',
      email: 'trunks@dbz.com',
      senha: 'sword',
      perfis: ['0'],
      dataCriacao: '24/12/2024'
    },
    {
      id: 14,
      nome: 'Gohan Son',
      cpf: '654.987.321-14',
      email: 'gohan@dbz.com',
      senha: 'greatsaiyaman',
      perfis: ['2'],
      dataCriacao: '24/12/2024'
    },
    {
      id: 15,
      nome: 'Jiraiya',
      cpf: '432.654.987-15',
      email: 'jiraiya@toad.com',
      senha: 'hermit',
      perfis: ['1'],
      dataCriacao: '24/12/2024'
    },
    {
      id: 16,
      nome: 'Shikamaru Nara',
      cpf: '333.444.555-16',
      email: 'shikamaru@nara.com',
      senha: 'shadow',
      perfis: ['0'],
      dataCriacao: '24/12/2024'
    },
    {
      id: 17,
      nome: 'Itachi Uchiha',
      cpf: '555.444.333-17',
      email: 'itachi@uchiha.com',
      senha: 'genjutsu',
      perfis: ['2'],
      dataCriacao: '24/12/2024'
    },
    {
      id: 18,
      nome: 'Cell',
      cpf: '789.654.123-18',
      email: 'cell@dbz.com',
      senha: 'perfectcell',
      perfis: ['1'],
      dataCriacao: '24/12/2024'
    },
    {
      id: 19,
      nome: 'Bulma Briefs',
      cpf: '321.765.432-19',
      email: 'bulma@capsulecorp.com',
      senha: 'intelligence',
      perfis: ['0'],
      dataCriacao: '24/12/2024'
    },
    {
      id: 20,
      nome: 'Killer Bee',
      cpf: '876.123.444-20',
      email: 'killerbee@cloud.com',
      senha: 'rapping',
      perfis: ['2'],
      dataCriacao: '24/12/2024'
    },
    {
      id: 21,
      nome: 'Killer Bee',
      cpf: '123.555.444-21',
      email: 'bee@cloud.com',
      senha: 'rapstar',
      perfis: ['0'],
      dataCriacao: '24/12/2024'
    },
    {
      id: 22,
      nome: 'Konohamaru Sarutobi',
      cpf: '210.321.654-22',
      email: 'konohamaru@konohagakure.com',
      senha: 'rasengan',
      perfis: ['1'],
      dataCriacao: '24/12/2024'
    },
    {
      id: 23,
      nome: 'Raditz',
      cpf: '999.888.777-23',
      email: 'raditz@dbz.com',
      senha: 'brother',
      perfis: ['2'],
      dataCriacao: '24/12/2024'
    },
    {
      id: 24,
      nome: 'Yamcha',
      cpf: '555.444.222-24',
      email: 'yamcha@dbz.com',
      senha: 'wolfang',
      perfis: ['0'],
      dataCriacao: '24/12/2024'
    }
  ]

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);
  
  constructor() { }

  ngOnInit(): void {
  }
    @ViewChild(MatPaginator) paginator: MatPaginator;
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }

}
