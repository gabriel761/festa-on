
create table pessoa (
	pk_id serial primary key,
	nome varchar (50) not null,
	email varchar (50) not null,
	senha varchar (50) not null
);
create table cliente (
	pk_id serial primary key,
	data_nascimento date not null,
	cpf varchar (15) not null,
	telefone varchar (20),
	instagram varchar (200),
	auth_adm boolean,
	auth_pag boolean
);
create table fornecedor (
	pk_id serial primary key,
	nome_loja varchar (50) not null,
	cnpj varchar (20) not null,
	telefone varchar (20) not null,
	instagram varchar (200),
	endereco varchar (400) not null,
	auth_adm boolean not null,
	auth_pag boolean not null,
	vip boolean not null
);
create table produto(
	pk_id serial primary key,
	nome_produto varchar (100) not null,
	descrição varchar (1000),
	fotos varchar (2000),
	preco real,
	categoria varchar (50)
);

alter table cliente add fk_cliente_pessoa int;
alter table fornecedor add fk_fornecedor_pessoa int;

alter table cliente add foreign key (fk_cliente_pessoa) references pessoa(pk_id);
alter table fornecedor add foreign key (fk_fornecedor_pessoa) references pessoa(pk_id);