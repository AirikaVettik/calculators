<template>
  <v-container>

    <v-card>
        <v-card-title class="orange lighten-1">
        <span class="headline white--text">Lähteandmed</span>
        <v-spacer></v-spacer>  
        </v-card-title>
    <br>
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
<br>
         <v-card>

            <v-card-title class="orange lighten-1" text="1 rem">
            <span class="headline white--text">Mahaarvamised</span>
            <v-spacer></v-spacer>  
            </v-card-title>

        <v-row>
            <v-col cols="10">
            <v-checkbox
            v-model="taxdeductions1"
            label="Arvesta maksuvaba tulu(500€ kuus)"
            color="success"
            ></v-checkbox>
            </v-col>
            <v-col cols="2">
                <v-btn fab icon color="green" align="left" @click="alert1 = !alert1"
                ><v-icon>info</v-icon></v-btn>
                </v-col>
                <v-alert
                :value="alert1"
                color="green"
                dark
                border="top"
                align="left"
                >
                Eesti residendist füüsilise isiku maksustamisperioodi tulust maha arvatav maksuvaba tulu. <br>
                <li>Aastatuluga kuni 14 400 eurot on maksuvaba tulu 6000 eurot aastas.</li>
                <li>Aastatulu kasvades 14 400 eurolt 25 200 euroni väheneb maksuvaba tulu vastavalt valemile 6000 – 6000 ÷ 10 800 × (tulu summa – 14 400).</li>
                <li>Aastatuluga üle 25 200 euro on maksuvaba tulu 0</li>
                </v-alert>

            <v-col cols="10">
            <v-checkbox
            v-model="taxdeductions2"
            label="Tööandja töötluskindlustusmakse (0.8%)"
            color="success"
            ></v-checkbox>
            </v-col>
                <v-col cols="2">
                <v-btn fab icon color="green" align="left" @click="alert2 = !alert2"
                ><v-icon>info</v-icon></v-btn>
                </v-col>
                <v-alert
                :value="alert2"
                color="green"
                dark
                border="top"
                align="left"
                >
                Eesti residendist füüsilise isiku maksustamisperioodi tulust maha arvatav maksuvaba tulu. <br>
                <li>Aastatuluga kuni 14 400 eurot on maksuvaba tulu 6000 eurot aastas.</li>
                <li>Aastatulu kasvades 14 400 eurolt 25 200 euroni väheneb maksuvaba tulu vastavalt valemile 6000 – 6000 ÷ 10 800 × (tulu summa – 14 400).</li>
                <li>Aastatuluga üle 25 200 euro on maksuvaba tulu 0</li>
                </v-alert>

            <v-col cols="10">
            <v-checkbox
            v-model="taxdeductions3"
            label="Töötaja (kindlustatu) töötuskindlustusemäär (1,8%%)"
            color="success"
            ></v-checkbox>
            </v-col>
                <v-col cols="2">
                <v-btn fab icon color="green" align="left" @click="alert3 = !alert3"
                ><v-icon>info</v-icon></v-btn>
                </v-col>
                <v-alert
                :value="alert3"
                color="green"
                dark
                border="top"
                align="left"
                >
                Eesti residendist füüsilise isiku maksustamisperioodi tulust maha arvatav maksuvaba tulu. <br>
                <li>Aastatuluga kuni 14 400 eurot on maksuvaba tulu 6000 eurot aastas.</li>
                <li>Aastatulu kasvades 14 400 eurolt 25 200 euroni väheneb maksuvaba tulu vastavalt valemile 6000 – 6000 ÷ 10 800 × (tulu summa – 14 400).</li>
                <li>Aastatuluga üle 25 200 euro on maksuvaba tulu 0</li>
                </v-alert>

            <v-col cols="10">
            <v-checkbox
            v-model="taxdeductions4"
            label="Kogumispension (II sammas)"
            color="success"
            ></v-checkbox>
            </v-col>
                <v-col cols="2">
                <v-btn fab icon color="green" align="left" @click="alert4 = !alert4"
                ><v-icon>info</v-icon></v-btn>
                </v-col>
                <v-alert
                :value="alert4"
                color="green"
                dark
                border="top"
                align="left"
                >
                Eesti residendist füüsilise isiku maksustamisperioodi tulust maha arvatav maksuvaba tulu. <br>
                <li>Aastatuluga kuni 14 400 eurot on maksuvaba tulu 6000 eurot aastas.</li>
                <li>Aastatulu kasvades 14 400 eurolt 25 200 euroni väheneb maksuvaba tulu vastavalt valemile 6000 – 6000 ÷ 10 800 × (tulu summa – 14 400).</li>
                <li>Aastatuluga üle 25 200 euro on maksuvaba tulu 0</li>
                </v-alert>
        </v-row>
        </v-card>
<br><br>
<v-btn @click="calculate"> Arvuta </v-btn>
<br><br>
        <v-card>
            <v-card-title class="orange lighten-1" text="1 rem">
            <span class="headline white--text">Palgafond</span>
            <v-spacer></v-spacer>  
            </v-card-title>
        
        <v-col cols="12" xs="12">
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
  </v-container>
</template>

<script>
  export default {
    name: "salaryCal",
    data () {
      return {
        selected: '',
        checked: ['Tööandjakulu', 'Brutopalk', 'Netopalk'],
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
            {text: "", value: "name"},
            {text: "€", value: "eur"},
        ],
        results: [
        {  
          name: "Tööandja kulu kokku (palgafond):",
          eur: 0
        },
        {
          name: "Sotsiaalmaks:",
          eur: 0
        },
        {
          name: "Töötuskindlustusmakse (tööandja):",
          eur: 0
        },
        {
          name: "Brutopalk:",
          eur: 0
        },
        {
          name: "Kogumispension (II sammas):",
          eur: 0
        },
        {
          name: "Töötuskindlustusmakse (töötaja):",
          eur: 0
        },
        {
          name: "Tulumaks:",
          eur: 0
        },
        {
          name: "Netopalk:",
          eur: 0
        }
      ] 
            // totalCost: null,
            // socialTax: null,
            // unemploymentEmployer: null,
            // grossSalary: null,
            // fundedPension: null,
            // unemploymentEmployee: null,
            // incomeTax: null,
            // netSalary: null,}]
      }
    },
    methods: {
        calculate() {

        if (this.salaryType=== "Brutopalk") {

            const fundedPension = this.salary * 0.02;
            const unemploymentEmployee = (this.salary - fundedPension) * 0.016;
            const incomeTax = ((this.salary - fundedPension - unemploymentEmployee)-500) * 0.2;

            const unemploymentEmployer = this.salary * 0.008;
            const socialTax = this.salary * 0.33;
            const totalCost = this.salary + socialTax + unemploymentEmployer;
            const netSalary = (this.salary - fundedPension - unemploymentEmployee - incomeTax);
            
   
        this.results = [
        {  
          name: "Tööandja kulu kokku (palgafond):",
          eur: totalCost.toFixed(2)
        },
        {
          name: "Sotsiaalmaks:",
          eur: socialTax.toFixed(2)
        },
        {
          name: "Töötuskindlustusmakse (tööandja):",
          eur: unemploymentEmployer.toFixed(2)
        },
        {
          name: "Brutopalk:",
          eur: this.salary.toFixed(2)
        },
        {
          name: "Kogumispension (II sammas):",
          eur: fundedPension.toFixed(2)
        },
        {
            name: "Töötuskindlustusmakse (töötaja):",
            eur: unemploymentEmployee.toFixed(2)
        },
        {
          name: "Tulumaks:",
          eur: incomeTax.toFixed(2)
        },
        {
          name: "Netopalk:",
          eur: netSalary.toFixed(2)
        }
      ];
        }
        if (this.salaryType === "Netopalk") {

            const incomeTax = ((this.salary - 500) / 0.8) - (this.salary - 500);
            const unemploymentEmployee = (this.salary + incomeTax) /0.984 - (this.salary + incomeTax);
            const fundedPension = (this.salary + unemploymentEmployee + incomeTax) /0.98 - (this.salary + unemploymentEmployee + incomeTax);
            const grossSalary = this.salary + incomeTax + unemploymentEmployee + fundedPension

            const unemploymentEmployer = grossSalary * 0.008;
            const socialTax = grossSalary * 0.33;
            const totalCost = grossSalary + socialTax + unemploymentEmployer;
            
   
        this.results = [
        {  
          name: "Tööandja kulu kokku (palgafond):",
          eur: totalCost.toFixed(2)
        },
        {
          name: "Sotsiaalmaks:",
          eur: socialTax.toFixed(2)
        },
        {
          name: "Töötuskindlustusmakse (tööandja):",
          eur: unemploymentEmployer.toFixed(2)
        },
        {
          name: "Brutopalk:",
          eur: grossSalary.toFixed(2)
        },
        {
          name: "Kogumispension (II sammas):",
          eur: fundedPension.toFixed(2)
        },
        {
            name: "Töötuskindlustusmakse (töötaja):",
            eur: unemploymentEmployee.toFixed(2)
        },
        {
          name: "Tulumaks:",
          eur: incomeTax.toFixed(2)
        },
        {
          name: "Netopalk:",
          eur: this.salary.toFixed(2)
        }
      ] 
        }
        if (this.salaryType === "Tööandjakulu") {

            const grossSalary = this.salary / 1.338;
            const socialTax = grossSalary * 0.33;
            const unemploymentEmployer = grossSalary* 0.008;
        
            const unemploymentEmployee = grossSalary * 0.016;
            const fundedPension = grossSalary * 0.02;
            const incomeTax = (grossSalary + unemploymentEmployee + fundedPension) * 0.2;
            const netSalary = grossSalary - incomeTax - fundedPension - unemploymentEmployee

            
   
        this.results = [
        {  
          name: "Tööandja kulu kokku (palgafond):",
          eur: this.salary.toFixed(2)
        },
        {
          name: "Sotsiaalmaks:",
          eur: socialTax.toFixed(2)
        },
        {
          name: "Töötuskindlustusmakse (tööandja):",
          eur: unemploymentEmployer.toFixed(2)
        },
        {
          name: "Brutopalk:",
          eur: grossSalary.toFixed(2)
        },
        {
          name: "Kogumispension (II sammas):",
          eur: fundedPension.toFixed(2)
        },
        {
            name: "Töötuskindlustusmakse (töötaja):",
            eur: unemploymentEmployee.toFixed(2)
        },
        {
          name: "Tulumaks:",
          eur: incomeTax.toFixed(2)
        },
        {
          name: "Netopalk:",
          eur: netSalary.toFixed(2)
        }
      ] 
    }
    }}}
</script>

<style>
.col-12 {
    padding: 10%
}
.col-10 {
    padding-left: 5%;
    padding-right: 5%;
    margin: 0;
}
</style>