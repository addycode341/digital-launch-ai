// src/utils/planFeatures.js


export const PLAN_FEATURES = {


Starter:{


builder:true,

analytics:false,

seo:false,

leads:true,

aiGrowth:false


},



Business:{


builder:true,

analytics:true,

seo:true,

leads:true,

aiGrowth:false


},



Growth:{


builder:true,

analytics:true,

seo:true,

leads:true,

aiGrowth:true


}



};






// Dashboard compatibility

export const plansFeatures = PLAN_FEATURES;







// Feature checking function

export const checkFeature = (plan, feature)=>{


if(!plan) return false;



const planData = PLAN_FEATURES[plan];



if(!planData) return false;



return planData[feature] || false;


};