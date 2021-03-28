<template>
  <v-container fluid>

    <v-card>
        <v-card-title class="orange lighten-1">
        <span class="headline white--text">Lähteandmed</span>
        <v-spacer></v-spacer>  
        </v-card-title>
    <br>
    <v-row>
    
    <v-col cols="12" xs="2" md="4">
    <v-checkbox
      v-model="selected"
      label="Tööandjakulu"
      value="Tööandjakulu"
      color="success"
    ></v-checkbox>
     </v-col>

    <v-col cols="12" xs="2" md="4">
    <v-checkbox
      v-model="selected"
      label="Brutopalk"
      value="Brutopalk"
      color="success"
    ></v-checkbox>
     </v-col>

    <v-col cols="12" xs="2" md="4">
    <v-checkbox
      v-model="selected"
      label="Netopalk"
      value="Netopalk"
      color="success"
    ></v-checkbox>
    </v-col>

    </v-row>
  <br>
    <v-divider></v-divider> 
          <v-col cols="8">
            <v-subheader align="left" class="font-weight-bold" >{{ selected }} </v-subheader>
            <v-text-field
            type="number"
            suffix="€/kuus"
            v-model="salary"
            ></v-text-field>
    </v-col>
     </v-card>          

         <v-card>
            <v-card-title class="orange lighten-1" text="1 rem">
            <span class="headline white--text">Mahaarvamised</span>
            <v-spacer></v-spacer>  
            </v-card-title>

        
            <v-col cols="10">
            <v-checkbox
            v-model="taxdeductions1"
            label="Arvesta maksuvaba tulu(500€ kuus)"
            color="success"
            ></v-checkbox>
            </v-col>

            <v-col cols="10">
            <v-checkbox
            v-model="taxdeductions2"
            label="Tööandja töötluskindlustusmakse (0.8%)"
            color="success"
            ></v-checkbox>
            </v-col>

            <v-col cols="10">
            <v-checkbox
            v-model="taxdeductions3"
            label="Töötaja (kindlustatu) töötuskindlustusemäär (1,8%%)"
            color="success"
            ></v-checkbox>
            </v-col>

            <v-col cols="10">
            <v-checkbox
            v-model="taxdeductions4"
            label="Kogumispension (II sammas)"
            color="success"
            ></v-checkbox>
            </v-col>
        </v-card>

        <v-card>
            <v-card-title class="orange lighten-1" text="1 rem">
            <span class="headline white--text">Tulemus</span>
            <v-spacer></v-spacer>  
            </v-card-title>
        
        <div>
            <v-simple-table>
            <template v-slot:default>
                    <tbody align="left">
                        <tr>
                            <td></td>
                            <td>€</td>
                            <td>%</td>
                        </tr>
                        <tr>
                            <td>Tööandja kulu kokku (palgafond):</td>
                            <td>{{ yearlySalary || 0.00.toFixed(2) }}</td>
                            <td>{{ yearlySalary || 0 }}</td>
                        </tr>
                        <tr>
                            <td>Sotsiaalmaks:</td>
                            <td>{{ thirtyPercent || 0.00.toFixed(2) }}</td>
                            <td>{{ thirtyPercent || 0 }}</td>
                        </tr>
                        <tr>
                            <td>Töötuskindlustusmakse (tööandja):</td>
                            <td>{{ thirtyPercent  || 0.00.toFixed(2) }}</td>
                            <td>{{ thirtyPercent || 0 }}</td>
                        </tr>
                        <tr>
                            <td>Brutopalk:</td>
                            <td>{{ thirtyPercent || 0.00.toFixed(2) }}</td>
                            <td>{{ thirtyPercent || 0 }}</td>
                        </tr>
                        <tr>
                            <td>Kogumispension (II sammas):</td>
                            <td>{{ thirtyPercent || 0.00.toFixed(2) }}</td>
                            <td>{{ thirtyPercent || 0 }}</td>
                        </tr>
                        <tr>
                            <td>Töötuskindlustusmakse (töötaja):</td>
                            <td>{{ thirtyPercent || 0.00.toFixed(2) }}</td>
                            <td>{{ thirtyPercent || 0  }}</td>
                        </tr>
                        <tr>
                            <td>Tulumaks:</td>
                            <td>{{ thirtyPercent || 0.00.toFixed(2) }}</td>
                            <td>{{ thirtyPercent || 0  }}</td>
                        </tr>
                        <tr>
                            <td>Netopalk:</td>
                            <td>{{ salary || 0.00.toFixed(2) }}</td>
                            <td>{{ thirtyPercent || 0 }}%</td>
                        </tr>
                    </tbody>
            </template>
            </v-simple-table>
        </div>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: "salaryCal",
    data () {
      return {
        selected: '',
        salary: "1000",
        taxfree: '500',
        taxdeductions1: true,
        taxdeductions2: true,
        taxdeductions3: true,
        taxdeductions4: true,

      }
    },
  }
</script>

<style>
.col-12 {
    padding:0;
}
.col-10 {
    padding:0;
    margin: 0;
}
.v-card {
    margin-bottom: 20px;
    margin-top: 60px
}
.row {
    margin-left: 5%;
}
.col {
    padding:0;
    margin-left: 5%
}
.v-application .headline {
    font-weight: 300;
    font-size: 20px !important
}
.table {
    font-size: 5px;
}
</style>