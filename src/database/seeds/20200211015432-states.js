module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'states',
      [
        {
          abbreviation: 'AC',
          name: 'Acre',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'AL',
          name: 'Alagoas',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'AP',
          name: 'Amapá',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'AM',
          name: 'Amazonas',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'BA',
          name: 'Bahia',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'CE',
          name: 'Ceará',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'DF',
          name: 'Distrito Federal',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'GO',
          name: 'Goiás',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'MA',
          name: 'Maranhão',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'MT',
          name: 'Mato Grosso',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'MS',
          name: 'Mato Grosso do Sul',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'MG',
          name: 'Minas Gerais',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'PA',
          name: 'Pará',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'PB',
          name: 'Paraíba',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'PR',
          name: 'Paraná',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'PE',
          name: 'Pernambuco',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'PI',
          name: 'Piauí',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'RJ',
          name: 'Rio de Janeiro',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'RN',
          name: 'Rio Grande do Norte',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'RS',
          name: 'Rio Grande do Sul',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'RO',
          name: 'Rondônia',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'RR',
          name: 'Roraima',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'SC',
          name: 'Santa Catarina',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'SP',
          name: 'São Paulo',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'SE',
          name: 'Sergipe',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          abbreviation: 'TO',
          name: 'Tocantins',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('states', null, {});
  },
};
