<template>
  <v-container>
    <v-card>
      <v-card-title class="orange lighten-1">
        <span class="headline white--text">Viimane kütusekulu arvutus</span>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-subheader align="left" class="font-weight-bold">
        {{ $store.state.distance }} km vahemaa läbimiseks kulub
        {{ spentFuel }} liitrit kütust.</v-subheader
      >
      <v-subheader align="left" class="font-weight-bold"
        >Kütuse maksumus on {{ fuelCost }} €
      </v-subheader>
    </v-card>
    <br />
    <v-card>
      <v-card-title class="orange lighten-1">
        <span class="headline white--text">Lähteandmed</span>
        <v-spacer></v-spacer>
      </v-card-title>
      <br />
      <v-row>
        <v-col cols="12" xs="6">
          <v-select
            :items="checked"
            label="Lähtesumma"
            v-model="salaryType"
            outlined
          ></v-select>
          <v-text-field
            type="number"
            suffix="€/kuus"
            v-model.number="salary"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card>
    <br />
    <v-card>
      <v-card-title class="orange lighten-1" text="1 rem">
        <span class="headline white--text">Mahaarvamised</span>
        <v-spacer></v-spacer>
      </v-card-title>

      <v-row>
        <v-col cols="8">
          <v-checkbox
            v-model="taxdeductions1"
            label="Arvesta maksuvaba tulu(500€ kuus)"
            color="success"
          ></v-checkbox>
        </v-col>
        <v-col cols="2">
          <v-btn fab icon color="green" align="left" @click="alert1 = !alert1"
            ><v-icon>info</v-icon></v-btn
          >
        </v-col>
        <v-alert :value="alert1" color="green" dark border="top" align="left">
          Eesti residendist füüsilise isiku maksustamisperioodi tulust maha
          arvatav maksuvaba tulu. <br />
          <li>
            Aastatuluga kuni 14 400 eurot on maksuvaba tulu 6000 eurot aastas.
          </li>
          <li>
            Aastatulu kasvades 14 400 eurolt 25 200 euroni väheneb maksuvaba
            tulu vastavalt valemile 6000 – 6000 ÷ 10 800 × (tulu summa – 14
            400).
          </li>
          <li>Aastatuluga üle 25 200 euro on maksuvaba tulu 0</li>
        </v-alert>

        <v-col cols="8">
          <v-checkbox
            v-model="taxdeductions2"
            label="Tööandja töötluskindlustusmakse (0.8%)"
            color="success"
          ></v-checkbox>
        </v-col>
        <v-col cols="2">
          <v-btn fab icon color="green" align="left" @click="alert2 = !alert2"
            ><v-icon>info</v-icon></v-btn
          >
        </v-col>
        <v-alert :value="alert2" color="green" dark border="top" align="left">
          Töötuskindlustusmakse määrad sätestatakse töötuskindlustuse seaduse §
          41 lõike 4 alusel Vabariigi Valitsuse määrusega. <br />
          <li>Tööandja töötuskindlustusmakse määr 2018–2021. aastal on 0,8%</li>
          <li>
            Töötaja (kindlustatu) töötuskindlustusmakse määr 2018–2021. aastal
            on 1,6%
          </li>
          <li>
            Töötuskindlustuse seaduse kohaselt on antud makse maksjateks s.h.
            töötaja, avalik teenistuja, võlaõigusliku lepingu alusel teenust
            osutav füüsiline isik. Töötaja ja tööandja makse määrad järgmiseks
            kalendriaastaks kehtestab Vabariigi Valitsus hiljemalt jooksva
            kalendriaasta 1. detsembriks.
          </li>
        </v-alert>

        <v-col cols="8">
          <v-checkbox
            v-model="taxdeductions3"
            label="Töötaja (kindlustatu) töötuskindlustusemäär (1,8%)"
            color="success"
          ></v-checkbox>
        </v-col>

        <v-col cols="8">
          <v-checkbox
            v-model="taxdeductions4"
            label="Kogumispension (II sammas)"
            color="success"
          ></v-checkbox>
        </v-col>
        <v-col cols="2">
          <v-btn fab icon color="green" align="left" @click="alert4 = !alert4"
            ><v-icon>info</v-icon></v-btn
          >
        </v-col>
        <v-alert :value="alert4" color="green" dark border="top" align="left">
          Makset on kohustatud tasuma kogumispensioni II sambaga vabatahtlikult
          liitunud või seadusega kohustatud residendist füüsiline isik (kes on
          esitanud maksete jätkamise avalduse), kui tema elukoht on Eestis või
          kui ta viibib Eestis 12 järjestikuse kalendrikuu jooksul vähemalt 183
          päeva. Makse määraks on 2% kogumispensionide seaduse § 7 lõikes 1
          nimetatud summadelt. <br />
          <li>
            01. juulist 2020. a kuni 31. augustini 2021. a on teise sambasse
            sotsiaalmaksu arvelt tehtavad 4% sissemaksed peatatud.
          </li>
          <li>
            2020. aasta oktoobrikuu jooksul sai esitada sissemaksete ajutise
            katkestamise avaldust, millega peatatakse palgalt 2% kogumispensioni
            makse tasumine 1. detsembrist 2020. aastal kuni 31. augustini 2021.
            aastal. Eesti residendist füüsilise isiku maksustamisperioodi tulust
            maha arvatav maksuvaba tulu.
          </li>
        </v-alert>
      </v-row>
    </v-card>
    <br /><br />
    <v-btn @click="calculate"> Arvuta </v-btn>
    <br /><br />
    <v-card>
      <v-card-title class="orange lighten-1">
        <span class="headline white--text">Graafiliselt</span>
        <v-spacer></v-spacer>
        <v-col cols="12">
          <pie-chart :value1="value1" :value2="value2" />
        </v-col>
      </v-card-title>
    </v-card>
    <br />

    <v-card>
      <v-card-title class="orange lighten-1" text="1 rem">
        <span class="headline white--text">Palgafond</span>
        <v-spacer></v-spacer>
      </v-card-title>

      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="results"
          class="elevation-1"
          hide-default-header
          hide-default-footer
        >
        </v-data-table>
      </v-col>
    </v-card>
    <br />
  </v-container>
</template>

<script>
import pieChart from "./../components/pieChart.vue";
import { mapState } from "vuex";

export default {
  name: "salaryCal",
  components: {
    pieChart,
  },
  data() {
    return {
      value1: 0,
      value2: 0,
      selected: "",
      checked: ["Tööandjakulu", "Brutopalk", "Netopalk"],
      salaryType: null,
      salary: null,
      taxdeductions1: true,
      taxdeductions2: true,
      taxdeductions3: true,
      taxdeductions4: true,
      alert1: false,
      alert2: false,
      alert3: false,
      alert4: false,
      headers: [
        { text: "", value: "name" },
        { text: "€", value: "eur" },
      ],
      results: [
        {
          name: "Tööandja kulu kokku (palgafond):",
          eur: 0,
        },
        {
          name: "Sotsiaalmaks:",
          eur: 0,
        },
        {
          name: "Töötuskindlustusmakse (tööandja):",
          eur: 0,
        },
        {
          name: "Brutopalk:",
          eur: 0,
        },
        {
          name: "Kogumispension (II sammas):",
          eur: 0,
        },
        {
          name: "Töötuskindlustusmakse (töötaja):",
          eur: 0,
        },
        {
          name: "Tulumaks:",
          eur: 0,
        },
        {
          name: "Netopalk:",
          eur: 0,
        },
      ],
    };
  },
  methods: {
    calculate() {
      if (this.salaryType === "Brutopalk") {
        const fundedPension = this.salary * 0.02;
        const unemploymentEmployee = (this.salary - fundedPension) * 0.016;
        const incomeTax =
          (this.salary - fundedPension - unemploymentEmployee - 500) * 0.2;

        const unemploymentEmployer = this.salary * 0.008;
        const socialTax = this.salary * 0.33;
        const totalCost = this.salary + socialTax + unemploymentEmployer;
        const netSalary =
          this.salary - fundedPension - unemploymentEmployee - incomeTax;

        this.value1 = (netSalary * 100) / totalCost;
        this.value2 = ((totalCost - netSalary) * 100) / totalCost;

        this.results = [
          {
            name: "Tööandja kulu kokku (palgafond):",
            eur: totalCost.toFixed(2),
          },
          {
            name: "Sotsiaalmaks:",
            eur: socialTax.toFixed(2),
          },
          {
            name: "Töötuskindlustusmakse (tööandja):",
            eur: unemploymentEmployer.toFixed(2),
          },
          {
            name: "Brutopalk:",
            eur: this.salary.toFixed(2),
          },
          {
            name: "Kogumispension (II sammas):",
            eur: fundedPension.toFixed(2),
          },
          {
            name: "Töötuskindlustusmakse (töötaja):",
            eur: unemploymentEmployee.toFixed(2),
          },
          {
            name: "Tulumaks:",
            eur: incomeTax.toFixed(2),
          },
          {
            name: "Netopalk:",
            eur: netSalary.toFixed(2),
          },
        ];
      }
      if (this.salaryType === "Netopalk") {
        const incomeTax = (this.salary - 500) / 0.8 - (this.salary - 500);
        const unemploymentEmployee =
          (this.salary + incomeTax) / 0.984 - (this.salary + incomeTax);
        const fundedPension =
          (this.salary + unemploymentEmployee + incomeTax) / 0.98 -
          (this.salary + unemploymentEmployee + incomeTax);
        const grossSalary =
          this.salary + incomeTax + unemploymentEmployee + fundedPension;

        const unemploymentEmployer = grossSalary * 0.008;
        const socialTax = grossSalary * 0.33;
        const totalCost = grossSalary + socialTax + unemploymentEmployer;

        this.results = [
          {
            name: "Tööandja kulu kokku (palgafond):",
            eur: totalCost.toFixed(2),
          },
          {
            name: "Sotsiaalmaks:",
            eur: socialTax.toFixed(2),
          },
          {
            name: "Töötuskindlustusmakse (tööandja):",
            eur: unemploymentEmployer.toFixed(2),
          },
          {
            name: "Brutopalk:",
            eur: grossSalary.toFixed(2),
          },
          {
            name: "Kogumispension (II sammas):",
            eur: fundedPension.toFixed(2),
          },
          {
            name: "Töötuskindlustusmakse (töötaja):",
            eur: unemploymentEmployee.toFixed(2),
          },
          {
            name: "Tulumaks:",
            eur: incomeTax.toFixed(2),
          },
          {
            name: "Netopalk:",
            eur: this.salary.toFixed(2),
          },
        ];
      }
      if (this.salaryType === "Tööandjakulu") {
        const grossSalary = this.salary / 1.338;
        const socialTax = grossSalary * 0.33;
        const unemploymentEmployer = grossSalary * 0.008;

        const unemploymentEmployee = grossSalary * 0.016;
        const fundedPension = grossSalary * 0.02;
        const incomeTax =
          (grossSalary + unemploymentEmployee + fundedPension) * 0.2;
        const netSalary =
          grossSalary - incomeTax - fundedPension - unemploymentEmployee;

        this.results = [
          {
            name: "Tööandja kulu kokku (palgafond):",
            eur: this.salary.toFixed(2),
          },
          {
            name: "Sotsiaalmaks:",
            eur: socialTax.toFixed(2),
          },
          {
            name: "Töötuskindlustusmakse (tööandja):",
            eur: unemploymentEmployer.toFixed(2),
          },
          {
            name: "Brutopalk:",
            eur: grossSalary.toFixed(2),
          },
          {
            name: "Kogumispension (II sammas):",
            eur: fundedPension.toFixed(2),
          },
          {
            name: "Töötuskindlustusmakse (töötaja):",
            eur: unemploymentEmployee.toFixed(2),
          },
          {
            name: "Tulumaks:",
            eur: incomeTax.toFixed(2),
          },
          {
            name: "Netopalk:",
            eur: netSalary.toFixed(2),
          },
        ];
      }
    },
  },
  computed: mapState({
    fuel: state => state.fuel,
    distance: state => state.distance,
    cost: state => state.cost,

    spentFuel() {
      return ((this.fuel / 100) * this.distance).toFixed(2);
    },
    fuelCost() {
      return (this.spentFuel * this.cost).toFixed(2);
    }
  })
};
</script>

<style scoped>
.col-12 {
  padding: 10%;
}
.col-10 {
  padding-left: 5%;
  padding-right: 5%;
  margin: 0;
}
.col-8 {
  padding-left: 10%;
  padding-right: 10%;
  margin: 0;
}
</style>
